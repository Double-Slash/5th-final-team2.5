import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputBox, { InputBoxProps } from './InputBox';

export default {
  title: 'InputBox',
  component: InputBox,
} as Meta;

const Template: Story<InputBoxProps> = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
