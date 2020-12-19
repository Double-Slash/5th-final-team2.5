import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
    <Input {...args} />
  </>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'email',
  placeholder: 'placeholder text',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'placeohlder text',
};

const GridTemplate: Story<InputProps> = (args) => (
  <div className="row g-3">
    <div className="col">
      <Input {...args} />
    </div>
    <div className="col">
      <Input type="number" {...args} />
    </div>
  </div>
);
export const WithGrid = GridTemplate.bind({});
WithGrid.args = {
  label: 'email',
  placeholder: 'placeholder',
};

const FormTemplate: Story<InputProps> = () => (
  <div className="container">
    <Input type="text" label="아이디" value="abcd1234" message="사용 가능한 아이디입니다." />
    <Input type="password" label="비밀번호" value="abcd1234" />
    <Input type="password" label="비밀번호 확인" message="비밀번호가 일치합니다." value="abcd1234" />
    <Input type="text" label="이름" value="abcd1234" />
  </div>
);

export const FormExample = FormTemplate.bind({});
