import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import renderer from 'react-test-renderer';

const appRendered = renderer.create(<App />).toJSON();
const app = shallow(<App />)

it('renders without crashing', () => {
    expect(appRendered).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{id: 1}]);
});