import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const defaultParams = {
  imageSrc:'image',
  title:'title',
  description:'수원 연합 창작 동아리 그 노래 회원모집',
};

export const Default = Template.bind({});
Default.args = defaultParams;


