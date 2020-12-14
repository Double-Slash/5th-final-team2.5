import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
    <Input {...args} />
  </>
);

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'email',
  placeholder: 'placeholder text',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'placeohlder text',
};

const GridTemplate: Story<InputProps> = (args) => (
  <div className="row g-3">
    <div className="col">
      <Input {...args} />
    </div>
    <div className="col">
      <Input type="number" {...args} />
    </div>
  </div>
);
export const WithGrid = GridTemplate.bind({});
WithGrid.args = {
  label: 'email',
  placeholder: 'placeholder',
};
