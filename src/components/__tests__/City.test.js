import React from "react";
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import { Provider } from "react-redux";

describe(
  'Home', () => {
    it(
      'should render the component', () => {
        const tree = renderer.create(
          <React.StrictMode>
            <Provider store={store}>
              <BrowserRouter>
                <Home />
              </BrowserRouter>
            </Provider>
          </React.StrictMode>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
      }
    )
  }
)
