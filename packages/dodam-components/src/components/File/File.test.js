import React from 'react';
import { mount } from 'enzyme';
import File from './File';

describe('<File />', () => {
  it('input과 button을 생성한다.', () => {
    const wrapper = mount(<File />);

    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('label').length).toBe(0);
  });
});
