import React from 'react';
import withForm, { FormProps } from '../../hocs/withForm';

export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, FormProps {
  required?: boolean;
  multiline?: boolean;
  id: string;
}

const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>((props, ref) => {
  const { required = false, multiline, id, ...rest } = props;
  const Component = multiline ? 'textarea' : 'input';

  return <Component id={id} required={required} className="form-control" ref={ref} {...rest} />;
});

export default withForm<InputBoxProps>(InputBox);
