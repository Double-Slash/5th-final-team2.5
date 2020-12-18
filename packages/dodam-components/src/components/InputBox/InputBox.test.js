import React from 'react';
import { mount } from 'enzyme';
import InputBox from './InputBox';

describe('<InputBox />', () => {
  it('Input과 label을 생성한다.', () => {
    const wrapper = mount(<InputBox label="Label" />);
    const label = wrapper.find('label');

    expect(label.length).toBe(1);
    expect(label.text()).toBe('Label');
    expect(wrapper.find('input').length).toBe(1);
  });

  it('Label props가 없으면 label을 생성하지 않는다.', () => {
    const wrapper = mount(<InputBox />);

    expect(wrapper.find('label').length).toBe(0);
  });

  it('textarea을 생성한다.', () => {
    const wrapper = mount(<InputBox multiline label="label" />);

    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('type=date을 전달받으면 datepicker을 생성한다.', () => {
    const component = mount(<InputBox type="date" />).find('.react-datepicker-wrapper');

    expect(component.length).toBe(1);
  });

  // warning 출력
  // 'NaN' is an invalid value of the 'left' css style property in react-datepicker
  it('type=date인 input에 포커스를 하면 달력이 팝업된다.', () => {
    const wrapper = mount(<InputBox type="date" />);

    wrapper.find('input').simulate('focus');
    expect(wrapper.find('Popper').length).toBe(1);
  });
});
