import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Screen1 from './November/Dashboard';
import Screen2 from './November/Student';
import Screen3 from './November/Izvjestaji';
import Screen4 from './India/Ispiti';
import Screen5 from './India/Potvrde';
import Screen6 from './India/Raspored';
<<<<<<< HEAD

/*export default class App extends React.Component {
=======
import Screen7 from  './November/login';
import Screen8 from  './November/SortiranjeGodina'
/*
export default class App extends React.Component {
>>>>>>> 438335e9e29fca04ed4eeadbcb3996975968fcb4
  render() {
    return (
      <View style={styles.container}>
      <Screen1/>
   </View>
    );
  }
}*/


class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {

    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {}
            <Image
              source={require('./image/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}


const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Student',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Izvještaji',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen4_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Ispiti',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen5_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: 'Potvrde',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen6_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      title: 'Raspored',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen8_StackNavigator = createStackNavigator({
  Third: {
    screen: Screen8,
    navigationOptions: ({ navigation }) => ({
      title: 'Prosjeci',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#376ff2',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },

  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Student',
    },
  },

  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Izvještaji',
    },
  },

  Screen4: {
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Ispiti',
    },
  },

  Screen5: {
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Potvrde',
    },
  },

  Screen6: {
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Raspored',
    },
  },
  Screen8: {
    screen: Screen8_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Prosjeci',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);
