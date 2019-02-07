import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { checkProps, mountWrap, shallowWrap } from './tests/utils';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

/*
THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES

WARNING: Due to the below being accessible to the global DOM,
         all *.test.js files will be ignored by ESLint. Otherwise,
         ESLint will throw errors that the functions are undefined
        because they are not explictly imported!
*/
const exposedProperties = ['window', 'navigator', 'document'];
const { document } = new JSDOM('').window;
global.document = document;
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.HTMLAnchorElement = window.HTMLAnchorElement;
global.shallow = shallowWrap;
global.mount = mountWrap;
global.checkProps = checkProps;
global.React = require('react');
global.Provider = require('react-redux').Provider;
global.ConnectedRouter = require('connected-react-router').ConnectedRouter;
global.Router = require('react-router').Router;
global.Route = require('react-router-dom').Route;
global.Switch = require('react-router-dom').Switch;

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
