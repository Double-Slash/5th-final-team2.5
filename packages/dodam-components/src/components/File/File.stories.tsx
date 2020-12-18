import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import File, { FileProps } from './File';

export default {
  title: 'File',
  component: File,
} as Meta;

const Template: Story<FileProps> = (args) => {
  const handlechange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(files[0]);
  };

  return <File onChange={handlechange} />;
};

export const Default = Template.bind({});
