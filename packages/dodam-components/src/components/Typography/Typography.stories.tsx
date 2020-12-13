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

export const TypographyComponent = Template.bind({});
TypographyComponent.args = {};
