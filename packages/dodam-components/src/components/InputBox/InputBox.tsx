import React from 'react';
import classNames from 'classnames';

export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  multiline?: boolean;
  label?: string;
  selected?: Date;
}

const InputBox = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputBoxProps>((props, ref) => {
  const { multiline, id, label, className, type, ...rest } = props;
  const Component = multiline ? 'textarea' : 'input';
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <Component type={type} id={id} className={classNames('form-control', className)} ref={ref} {...rest} />

      <style jsx>
        {`
          textarea {
            min-height: 120px;
            border-radius: 0;
          }
          input {
            border-radius: 0;
          }
        `}
      </style>
    </>
  );
});

export default InputBox;
