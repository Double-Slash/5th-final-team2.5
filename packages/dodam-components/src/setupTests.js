import { configure } from 'enzyme';
// unofficial adapter for react 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
