import React from 'react';
import { mount } from 'enzyme';
import InputBox from './InputBox';

describe('<InputBox />', () => {
  it('Input과 label을 생성한다.', () => {
    const wrapper = mount(<InputBox label="Label" />);

    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('textarea을 생성한다.', () => {
    const wrapper = mount(<InputBox multiline label="label" />);

    expect(wrapper.find('textarea').length).toBe(1);
  });
});
