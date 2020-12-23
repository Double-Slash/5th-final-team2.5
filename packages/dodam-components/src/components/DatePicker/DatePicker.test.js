import React from 'react';
import { mount } from 'enzyme';
import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  it('type=date을 전달받으면 datepicker을 생성한다.', () => {
    const component = mount(<DatePicker />).find('.react-datepicker-wrapper');

    expect(component.length).toBe(1);
  });

  // warning 출력
  // 'NaN' is an invalid value of the 'left' css style property in react-datepicker
  it('type=date인 input에 포커스를 하면 달력이 팝업된다.', () => {
    const wrapper = mount(<DatePicker type="date" />);

    wrapper.find('input').simulate('focus');
    expect(wrapper.find('Popper').length).toBe(1);
  });
});
