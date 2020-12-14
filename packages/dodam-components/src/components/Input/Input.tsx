import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeholder, id, ...rest } = props;

  return (
    <div className="input-root">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input ref={ref} name="temp-box" id={id} className="input-field" placeholder={placeholder} {...rest} />

      <style jsx>
        {`
          .input-root {
            position: relative;
            padding: 8px 0 0;
            margin-top: 4px;
          }
          .input-root:focus-within > .input-label {
            color: #0d6efd;
          }
          .input-field {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 1px solid #d2d2d2;
            outline: 0;
            color: #212121;
            padding: 5px 0;
            background: transparent;
            transition: border-bottom-color 0.3s ease;
            font-size: 1rem;
          }
          .input-field::placeholder {
            color: #bbbbbb;
          }
          .input-field:focus {
            border-bottom: 2px solid #0d6efd;
            padding-bottom: 4px;
          }
          .input-label {
            color: #bbbbbb;
            font-size: 14px;
            transition: color 0.3s ease;
          }
        `}
      </style>
    </div>
  );
});

export default Input;
