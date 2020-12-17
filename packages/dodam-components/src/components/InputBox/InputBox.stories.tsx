import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputBox, { InputBoxProps } from './InputBox';

export default {
  title: 'InputBox',
  component: InputBox,
} as Meta;

const Template: Story<InputBoxProps> = (args) => (
  <>
    <InputBox {...args} />
    <InputBox {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: '동아리 이름',
  required: true,
};
