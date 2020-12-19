import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';

// TODO: 아이콘 입력허용
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  message?: string;
  icon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, placeholder, id, name, error, message, icon, ...rest } = props;

  return (
    <div className="input-root">
      {label && (
        <label htmlFor={id} className={classNames('label', Boolean(error) && 'label-error')}>
          {label}
        </label>
      )}
      <input
        className={classNames('field', Boolean(error) && 'input-error')}
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
      <div className="message-wrapper">
        <Typography className={classNames(error ? 'error' : 'message')} align="right">
          {error || message}
        </Typography>
      </div>

      {/* TODO: svg를 사용할수도 있음 */}
      {icon && <img alt="" className="icon" />}
      <style jsx global>
        {`
          .input-root {
            position: relative;
            padding: 8px 0;
          }
          .input-root:focus-within > .label {
            color: #0d6efd;
          }
          .input-root .field {
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
          .input-root .field::placeholder {
            color: #bbbbbb;
          }
          .input-root .field:focus {
            border-bottom: 2px solid #0d6efd;
            padding-bottom: 4px;
          }
          .input-root .label {
            color: #bbbbbb;
            font-size: 14px;
            transition: color 0.3s ease;
          }

          .input-root .icon {
            width: 32px;
            height: 32px;
            position: absolute;
            right: 8px;
            bottom: 50%;
            background-color: black;
            transform: translate(0, 50%);
          }

          .input-root .message-wrapper {
            height: 8px;
          }
          .input-root .message-wrapper .error {
            color: #dc3545 !important;
            font-size: 14px;
            margin: 0;
          }
          .input-root .message-wrapper .message {
            color: #bbbbbb !important;
            font-size: 14px;
            margin: 0;
          }

          .input-root .label-error {
            color: #dc3545 !important;
          }
          .input-root .input-error {
            border-bottom: 2px solid #dc3545 !important;
            padding-bottom: 4px;
          }
        `}
      </style>
    </div>
  );
});

export default Input;
