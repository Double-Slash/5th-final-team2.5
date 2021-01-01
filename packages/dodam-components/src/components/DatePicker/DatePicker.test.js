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
  it('포커스를 하면 달력이 팝업된다.', () => {
    const wrapper = mount(<DatePicker />);

    wrapper.find('input').simulate('focus');
    expect(wrapper.find('Popper').length).toBe(1);
  });

  it('className을 전달할 수 있다.', () => {
    const component = mount(<DatePicker className="test" />)
      .find('input')
      .getDOMNode();

    expect(component.classList).toContain('test');
  });
});
