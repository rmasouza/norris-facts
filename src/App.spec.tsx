import React from 'react';
import {mount, shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('should render correctly with "Hello World!"', () => {
        mount(<App />);
    });
});
