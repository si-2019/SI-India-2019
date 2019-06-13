const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const db = require('./modeli/db.js');
const sequelize = require('sequelize');
var app = express();
const port=31910;

const StudentIspit = db.sequelize.import(__dirname+'/modeli/StudentIspit.js');
const Ispit = db.sequelize.import(__dirname+'/modeli/Ispit.js');
const Predmet = db.sequelize.import(__dirname+'/modeli/Predmet.js');
const Korisnik = db.sequelize.import(__dirname+'/modeli/Korisnik.js');
const Uloga = db.sequelize.import(__dirname+'/modeli/Uloga.js');
const Odsjek = db.sequelize.import(__dirname+'/modeli/Odsjek.js');
const AkademskaGodina = db.sequelize.import(__dirname+'/modeli/AkademskaGodina.js');
const PredmetStudnet = db.sequelize.import(__dirname+'/modeli/PredmetStudent.js');

db.sequelize.sync()
.then(() => console.log('Konektovano na bazu'))
.catch(e => console.log(e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//app.use(cors());

var dajIspitStudent = function(id) {
    return new Promise(function(resolve, reject)  {
        db.StudentIspit.findAll({where: {StudentId: id}}).then(function(ispiti){
            resolve(ispiti);
        }).catch(e => reject(e));
    });
}

var dajIspitPoId = function(idIspit) {
    return new Promise(function(resolve, reject) {
        db.Ispit.findOne({where: {idIspit: idIspit}}).then(function(ispit) {
            resolve(ispit);
        }).catch(e => reject(e));
    })
}

var dajNazivPredmeta = function(idPredmeta) {
    return new Promise(function(resolve, reject) {
        db.Predmet.findOne({where: {id: idPredmeta}}).then(function(predmet2) {
            resolve(predmet2);
        }).catch(e => reject(e));  
    });
}

//kupljenje svih prijavljenih ispita studenta 
app.get('/student/:id/prijavljeni',  function(req, res) {
    var id = req.params.id;
    var niz = [];
    res.contentType('application/json');
    let greska = { 'poruka': 'Nije pronađen ni na jedan ispit'};
    dajIspitStudent(id).then(function(rez) {
        if(rez.length == 0) res.send(greska);
        else {
            let brojac = rez.length;
            console.log("Ispiti: " + JSON.stringify(rez));
            rez.forEach(red => {
                //console.log("Ispit:" + red);
                dajIspitPoId(red.ispitId).then(function(ispit) {
                    //console.log("Ispit:" + JSON.stringify(ispit));
                    if(ispit != null && ispit != undefined && ispit != []) {
                        dajNazivPredmeta(ispit.idPredmet).then(function(vracenoImePredmeta) { 
                            niz.push({ predmet: vracenoImePredmeta.naziv, tip: ispit.tipIspita, rokPrijave: ispit.rokPrijave, datumIspita: ispit.termin, napomena: ispit.napomena, prijavljen: 1, popunjen: ispit.kapacitet});
                            brojac--;
                            if(brojac == 0)
                                res.send(niz);
                        }).catch(e => {console.log(e)}); 
                    }
                }).catch(e => {console.log(e)});
            });
        }   
    }).catch(e => {console.log(e)});
});

var dajPredmetStudent = function(id) {
    return new Promise(function(resolve, reject)  {
        db.predmet_student.findAll({where: {idStudent: id}}).then(function(predmeti) {
            resolve(predmeti);
        }).catch(e => reject(e));
    });
}

var dajIspitePredmet = function(idPredmeta) {
    return new Promise(function(resolve, reject) {
        db.Ispit.findAll({where: {idPredmet: idPredmeta}}).then(function(ispiti){
            resolve(ispiti);
        }).catch(e => reject(e));
    });
}

var vratiIspis = function(ispitiOdgovor, datetime) {
    var niz = [];
    return new Promise(function(resolve, reject) {
        let ispitiOdgovorFilter = ispitiOdgovor.filter(ispit => ispit.rokPrijave != null && new Date(ispit.rokPrijave) > new Date(datetime));
        console.log("ispitiOdgovorFilter: " + JSON.stringify(ispitiOdgovorFilter));
        if(ispitiOdgovorFilter.length == 0) resolve(niz);
        else { 
            let brojac = ispitiOdgovorFilter.length; 
            ispitiOdgovorFilter.forEach(objekt => {
                dajNazivPredmeta(objekt.idPredmet).then(function(vracenoImePredmeta) {
                    niz.push({ predmet: vracenoImePredmeta.naziv, tip: objekt.tipIspita, rokPrijave: objekt.rokPrijave, datumIspita: objekt.termin, napomena: objekt.napomena, prijavljen: 0, popunjen: objekt.kapacitet});
                    brojac--;
                    if (brojac == 0) {
                        resolve(niz);
                    }
                }).catch(e => reject(e));  
            });
        }
    });
}

//kupljenje svih aktivnih ispita
app.get('/student/:id/aktivni', function(req, res) {
    var id = req.params.id;
    var datetime = moment().format();
    datetime = datetime.slice(0,19) + 'Z';
    
    var niz = [];
    res.contentType('application/json');
    let greska = { 'poruka': 'Nije pronađen ni na jedan ispit'};
    dajPredmetStudent(id).then(function(odgovor) {
        
        if (odgovor.length == 0) res.send(greska);
        else {
            let brojac = odgovor.length;
            console.log("Odgovor: " + JSON.stringify(odgovor)); //odgovor je ok
            odgovor.forEach(function(elementOdgovora) {
                if(elementOdgovora != null && elementOdgovora != undefined && elementOdgovora != []) {
                    dajIspitePredmet(elementOdgovora.idPredmet).then(function(ispitiOdgovor) {
                        if(ispitiOdgovor != undefined && ispitiOdgovor != null && ispitiOdgovor != []) {
                            vratiIspis(ispitiOdgovor, datetime).then(function(izlazniNiz) {
                                
                                if (izlazniNiz.length == 0) { res.send(niz); } // da li treba prekinuti??
                                else {
                                    izlazniNiz.forEach(objektNiza => {
                                        brojac--;
                                        niz.push(objektNiza);
                                    })
                                    
                                    if (brojac <= 0 || izlazniNiz.length == 0) { res.send(niz); }
                                }
                            }).catch(e => {console.log(e)});
                        }
                    }).catch(e => {consol.log(e)});
                }
            });
        }
    }).catch(e => {console.log(e)});
 
});


app.listen(port, () => console.log(`Server pokrenut na portu ${port}!`))