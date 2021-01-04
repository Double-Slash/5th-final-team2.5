import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Sidebar, { SidebarProps } from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

const defaultParams = {
  title:'title',
};

export const Default = Template.bind({});
Default.args = defaultParams;


