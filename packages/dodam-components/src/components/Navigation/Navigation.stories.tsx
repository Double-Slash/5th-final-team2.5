import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation, { NavigationProps } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
} as Meta;

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: '도담도담',
};
