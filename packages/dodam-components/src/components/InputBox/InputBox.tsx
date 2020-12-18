import React from 'react';

export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
  label?: string;
}

const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>((props, ref) => {
  const { multiline, id, label, ...rest } = props;
  const Component = multiline ? 'textarea' : 'input';
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <Component id={id} className="form-control" ref={ref} {...rest} />

      <style jsx>
        {`
          textarea {
            min-height: 120px;
          }
        `}
      </style>
    </>
  );
});

export default InputBox;
