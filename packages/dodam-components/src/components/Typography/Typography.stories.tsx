import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography, { TypographyProps } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Casdqum dolore fuga laborum saepe, autem, consequuntur in
    suscipit minus placeat nisi voluptatem! Fuga cum facilis molestias unde hic neque quam harum!
  </Typography>
);

const defaultParams = {
  align: 'left',
  variant: 'p',
  weight: 'normal',
};

export const Default = Template.bind({});
Default.args = defaultParams;

export const Heading = Template.bind({});
Heading.args = {
  ...defaultParams,
  variant: 'h5',
};
