import React from 'react';
import { mount } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('title props에 맞는 navigation을 생성한다.', () => {
    const TitleText = 'Title';
    const wrapper = mount(<Navigation title={TitleText} />);

    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('h6').getDOMNode().textContent).toBe(TitleText);
  });

  it('img props에 맞는 이미지를 생성한다.', () => {});
});
