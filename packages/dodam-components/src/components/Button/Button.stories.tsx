import React, { MouseEvent } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const SecondaryFull = Template.bind({});
SecondaryFull.args = {
  variant: 'secondary',
  fullWidth: true,
};

const ToggleTemplate: Story<ButtonProps> = () => {
  const [active, setActive] = React.useState('');

  const handleClick = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const id = (target as HTMLButtonElement).id;
    setActive(id);
  };

  return (
    <>
      <div className="row">
        <Button onClick={handleClick} id="btn-1" outline active={'btn-1' === active}>
          선택1
        </Button>
      </div>
      <div className="row">
        <Button onClick={handleClick} id="btn-2" outline active={'btn-2' === active}>
          선택2
        </Button>
      </div>

      <style jsx>
        {`
          .row {
            margin: 8px 0;
          }
        `}
      </style>
    </>
  );
};
export const ToggleButtons = ToggleTemplate.bind({});
