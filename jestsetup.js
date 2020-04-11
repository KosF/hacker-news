// Make the Enzyme functions available in all test files without importing
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.render = render;
global.shallow = shallow;
global.mount = mount;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
