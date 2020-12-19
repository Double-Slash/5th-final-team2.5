import React from 'react';
import { mount } from 'enzyme';
import Typography from './Typography';

describe('<Typography />', () => {
  it('Typography를 생성한다', () => {
    const component = mount(<Typography variant="p" />).find('p');

    expect(component.length).toEqual(1);
  });

  ['p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1', 'span'].forEach((tagName) => {
    it(`${tagName}의 태그를 생성한다.`, () => {
      const component = mount(<Typography variant={tagName} />).find(tagName);

      expect(component.length).toEqual(1);
    });
  });

  it('align을 설정할 수 있다.', () => {
    const component = mount(<Typography align="right" />)
      .find('p')
      .getDOMNode();

    expect(component.className).toContain('text-end');
  });
});
