import React from 'react';
import Logout from './Logout';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

describe('<Logout />', () => {
    it("Postoji li prikaz korisničkog ID", () => {
        const wrapper = shallow(<Logout />);
        expect(wrapper.find("prikazID").exists()).toBe(true);
    })
})
