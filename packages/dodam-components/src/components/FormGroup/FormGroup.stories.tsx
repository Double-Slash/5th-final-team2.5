import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormGroup, { FormGroupProps } from './FormGroup';
import InputBox from '../InputBox';

export default {
  title: 'FormGroup',
  component: FormGroup,
} as Meta;

const Template: Story<FormGroupProps> = (args) => (
  <FormGroup {...args}>
    <InputBox />
  </FormGroup>
);

export const withInputBox = Template.bind({});
withInputBox.args = {
  name: '동아리 이름',
  required: true,
};
