import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Check, { CheckProps } from './Check';

export default {
  title: 'Check',
  compoennt: Check,
} as Meta;

const Template: Story<CheckProps> = (args) => <Check {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  checked: false,
};
