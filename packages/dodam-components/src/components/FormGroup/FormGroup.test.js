import React from 'react';
import { mount } from 'enzyme';
import FormGroup from './FormGroup';

describe('<FormGroup />', () => {
  it('FormGroup을 생성한다', () => {
    const wrapper = mount(<FormGroup />);

    expect(wrapper.find('.form-group').length).toBe(1);
  });

  it('name이 있으면 legend을 생성한다.', () => {
    const component = mount(<FormGroup name="name" />).find('legend');

    expect(component.length).toBe(1);
  });

  it('name이 없으면 legend을 생성하지 않는다.', () => {
    const component = mount(<FormGroup name="" />).find('legend');

    expect(component.length).toBe(0);
  });
});
