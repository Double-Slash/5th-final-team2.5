import React from 'react';
import { mount, shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  it('Input을 생성한다.', () => {
    const component = shallow(<Input label="label" />).find('input');

    expect(component.length).toBe(1);
  });

  it('label이 없으면 label을 생성하지 않는다.', () => {
    const component = shallow(<Input />).find('label');

    expect(component.length).toBe(0);
  });

  it('error와 message를 입력받으면 error만 출력한다.', () => {
    const component = mount(<Input error="error" message="msg" />).find('p');

    expect(component.hasClass('error')).toBeTruthy();
    expect(component.getDOMNode().textContent).toBe('error');
  });

  it('icon을 생성한다.', () => {
    const component = shallow(<Input icon />).find('.icon');

    expect(component.length).toBe(1);
  });
});
