import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormGroup, { FormGroupProps } from './FormGroup';
import InputBox from '../InputBox';
import RadioGroup, { RadioGroupProps } from '../RadioGroup';

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

const TemplateRadio: Story<FormGroupProps & RadioGroupProps> = ({ name, required, items, selected }) => {
  const [value, setValue] = React.useState(selected);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <FormGroup name={name} required={required}>
      <RadioGroup onChange={handleChange} items={items} selected={value} />
    </FormGroup>
  );
};
export const withRadioGroup = TemplateRadio.bind({});
withRadioGroup.args = {
  name: '활동지역',
  required: true,
  items: ['전국', '수도권', '충북/충남/대전', '전북', '전남/광주'],
  selected: '전국',
};
