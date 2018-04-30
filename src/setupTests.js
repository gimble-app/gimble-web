import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: "http://localhost",
  referrer: "http://localhost",
  contentType: "text/html",
  userAgent: "mhmm",
  includeNodeLocations: true
});

global.window = dom.window;
global.document = window.document;

configure({ adapter: new Adapter() });
