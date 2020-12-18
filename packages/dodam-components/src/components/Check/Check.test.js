import React from 'react';
import { mount, shallow } from 'enzyme';
import Check from './Check';

describe('<Check />', () => {
  it('Radio를 default로 생성한다.', () => {
    const component = shallow(<Check label="label" />).find('input');

    expect(component.props().type).toBe('radio');
  });

  it('label을 props로 받지 않으면 생성하지 않는다.', () => {
    const component = shallow(<Check />).find('label');

    expect(component.length).toBe(0);
  });
});
