import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import File, { FileProps } from './File';

export default {
  title: 'File',
  component: File,
} as Meta;

const Template: Story<FileProps> = () => {
  const handlechange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    // 파일을 불러왔는지 콘솔 로그로 확인
    // eslint-disable-next-line no-console
    console.log(files[0]);
  };

  return <File onChange={handlechange} />;
};

export const Default = Template.bind({});
