import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import renderer from 'react-test-renderer';

describe('App', () => {
    const appRendered = renderer.create(<App />).toJSON();
    const app = shallow(<App />)

    it('renders correctly', () => {
        expect(appRendered).toMatchSnapshot();
    });

    it('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add-gift` button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });

        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
    });
});
