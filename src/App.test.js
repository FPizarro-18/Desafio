import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { mount,shallow} from 'enzyme';

it('renders without crashing', () => {
 const component = renderer.create(<App/>,);
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});