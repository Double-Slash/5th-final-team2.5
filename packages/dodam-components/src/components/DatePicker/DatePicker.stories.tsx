import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DatePicker, { DateProps } from './DatePicker';

export default {
  title: 'DatePciker',
  component: DatePicker,
} as Meta;

const Template: Story<DateProps> = (args) => <DatePicker {...args} />;
export const Default = Template.bind({});
Default.args = {
  selected: new Date(),
  label: '시작날짜'
};
