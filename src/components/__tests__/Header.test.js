import React from "react";
import renderer from 'react-test-renderer';
import { HashRouter as Router } from "react-router-dom";
import Header from "../Header";
import '@testing-library/jest-dom';

describe('Test of Header', () => {
  it('test if Header is rendered', () => {
      const headerTest = renderer
          .create(<Router><Header /></Router>)
          .toJSON();
      expect(headerTest).toMatchSnapshot();
  });
});