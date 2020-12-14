import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('버튼을 생성한다.', () => {
    const component = mount(<Button />).find('button');

    expect(component.length).toEqual(1);
  });

  it('기본으로 type=button인 버튼을 생성한다', () => {
    const btnAttr = mount(<Button />)
      .find('button')
      .getDOMNode()
      .getAttribute('type');

    expect(btnAttr).toBe('button');
  });

  it('보내진 type에 맞는 버튼을 생성한다.', () => {
    const btnAttr = mount(<Button type="submit" />)
      .find('button')
      .getDOMNode()
      .getAttribute('type');

    expect(btnAttr).toBe('submit');
  });

  it('클릭시 콜백함수를 호출한다.', (done) => {
    mount(<Button onClick={() => done()} />).simulate('click');
  });

  it('비활성화가 가능하다.', () => {
    const btnAttr = mount(<Button disabled />)
      .find('button')
      .getDOMNode()
      .getAttribute('disabled');

    expect(btnAttr).not.toBeNull();
  });

  it('사이즈를 조절할 수 있다.', () => {
    const btn = mount(<Button size="large" />)
      .find('button')
      .getDOMNode();

    expect(btn.className).toContain('btn-lg');
  });

  it('class을 전달할 수 있다.', () => {
    const btn = mount(<Button className="foo" />)
      .find('button')
      .getDOMNode();

    expect(btn.className).toContain('foo');
  });

  it('variant을 설정할 수 있다.', () => {
    const btn = mount(<Button variant="secondary" />)
      .find('button')
      .getDOMNode();

    expect(btn.className).toContain('btn-secondary');
  });

  it('기본 varaint는 primary로 설정된다.', () => {
    const btn = mount(<Button />)
      .find('button')
      .getDOMNode();

    expect(btn.className).toContain('btn-primary');
  });

  it('fullwidth을 설정할 수 있다.', () => {
    const btn = mount(<Button fullWidth />)
      .find('button')
      .getDOMNode();

    expect(btn.className).toContain('w-100');
  });

  // react 17 adapter에서 ref를 지원하지 않음. 확인필요
  // it('ref을 전달받을 수 있다.', () => {
  //   const ref = React.createRef();
  //   mount(
  //     <div>
  //       <Button ref={ref} />
  //     </div>
  //   );

  //   expect(ref.current).toBeInstanceOf(Button);
  // });
});
