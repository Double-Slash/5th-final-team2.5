import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from './RadioGroup';

describe('<RadioGroup />', () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'd'];
  it('items개수 만큼 input을 생성한다.', () => {
    const components = mount(<RadioGroup items={items} />).find('input');

    expect(components.length).toBe(items.length);
  });

  it('items 이름으로 label을 생성한다.', () => {
    const components = mount(<RadioGroup items={items} />).find('label');

    components.forEach((component, idx) => {
      expect(component.getDOMNode().textContent).toBe(items[idx]);
    });
  });

  it('selected와 같으면 check한다.', () => {
    const component = mount(<RadioGroup items={items} selected="a" />).find('.radio-group');

    expect(component.childAt(0).props().checked).toBeTruthy();
  });
});
