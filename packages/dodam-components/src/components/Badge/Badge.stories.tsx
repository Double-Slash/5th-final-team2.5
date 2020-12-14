import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Badge, { BadgeProps } from './Badge';
import Typography, { TypographyProps } from '../Typography';

export default {
  title: 'Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Badge</Badge>;
const TemplateWithTypo: Story<BadgeProps & TypographyProps> = () => (
  <div>
    <Badge>D-4</Badge>
    <Typography inline className="text-date" variant="h6">
      11월 25일(수) ~ 12월 9일(수)
    </Typography>

    <style jsx global>
      {`
        .text-date {
          margin: 0.5rem;
        }
      `}
    </style>
  </div>
);

const defaultParams = {
  rounded: true,
  color: 'primary',
  weight: 'normal',
};
export const BadgeComponent = Template.bind({});
BadgeComponent.args = defaultParams;

export const BadgeWithTypo = TemplateWithTypo.bind({});
