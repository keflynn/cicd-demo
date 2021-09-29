import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import toJson from 'enzyme-to-json';

import MainComponent from '../client/components/MainComponent.jsx';
import App from '../client/App.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
    describe('Main Component', () => {
        let wrapper;

        beforeAll(() => {
            wrapper = shallow(<MainComponent />);
        });

        it('Renders a div', () => {
            expect(wrapper.type()).toEqual('div');
        });

        it('It renders two nested elements', () => {
            expect(wrapper.children()).toHaveLength(2);
        });

        it('Renders a nested h1', () => {
            expect(wrapper.children('h1').type()).toEqual('h1');
        });

        it('Renders a nested p with the correct text', () => {
            expect(wrapper.children('p').type()).toEqual('p');
            expect(wrapper.children('p').text()).toEqual('Clearly.');
        });
    });

    describe('App Component', () => {
        let wrapper;

        beforeAll(() => {
            wrapper = shallow(<App />);
        });

        it('Renders a div', () => {
            expect(wrapper.type()).toEqual('div');
        });

        it('It renders exactly one nested element', () => {
            expect(wrapper.children()).toHaveLength(1);
        });
    });
});