import React from 'react';
import { mount } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  it('ProgressBar와 텍스트를 생성한다.', () => {
    const wrapper = mount(<ProgressBar />);

    expect(wrapper.find('.percent-text').length).toBe(1);
    expect(wrapper.find('.progress-bar').length).toBe(1);
  });

  it('value와 max로 구성된 텍스트를 출력한다.', () => {
    const value = 50;
    const max = 100;
    const components = mount(<ProgressBar value={value} max={max} />).find('span');

    expect(components.length).toBe(3);
    expect(components.at(0).text()).toBe(value.toString());
    expect(components.at(2).text()).toBe(max.toString());
  });

  it('value min max에 맞게 progress가 증가한다.', () => {
    const value = 150;
    const min = 100;
    const max = 200;
    const component = mount(<ProgressBar value={value} min={min} max={max} />)
      .find('.progress-bar')
      .getDOMNode();

    expect(component.getAttribute('style')).toContain('width: 50%;');
  });
});
