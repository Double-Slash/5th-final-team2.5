import React from 'react';
import { mount } from 'enzyme';
import Badge from './Badge';

describe('<Badge />', () => {
  it('올바르게 뱃지를 생성한다.', () => {
    const component = mount(<Badge>Message</Badge>)
      .find('.badge.rounded-pill.bg-primary')
      .first()
      .getDOMNode();

    expect(component.textContent).toBe('Message');
  });
});
