import React, { useRef } from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import useCombinedRef from '../../utils/useCombinedRef';

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
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const combinedRef = useCombinedRef(ref, inputRef);

  const handleFocus = () => {
    if (labelRef.current) (labelRef.current as HTMLLabelElement).classList.add('text-primary');
    (combinedRef.current as HTMLInputElement).classList.add('border-primary');
  };

  const handleBlur = () => {
    if (labelRef.current) (labelRef.current as HTMLLabelElement).classList.remove('text-primary');
    (combinedRef.current as HTMLInputElement).classList.remove('border-primary');
  };

  return (
    <div className="input-root" onFocus={handleFocus} onBlur={handleBlur}>
      {label && (
        <label ref={labelRef} htmlFor={id} className={classNames('label', Boolean(error) && 'text-danger')}>
          {label}
        </label>
      )}
      <input
        {...rest}
        className={classNames('field', Boolean(error) && 'border-danger')}
        ref={combinedRef}
        name={name}
        id={id}
        placeholder={placeholder}
      />

      <div className="message-wrapper">
        <Typography className={classNames(error ? 'text-danger' : 'message')} align="right">
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
            padding-bottom: 4px;
            border-bottom-width: 2px;
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
          .input-root .message-wrapper .text-danger {
            font-size: 14px;
            margin: 0;
          }
          .input-root .message-wrapper .message {
            color: #bbbbbb !important;
            font-size: 14px;
            margin: 0;
          }

          .input-root .border-danger {
            border-bottom-width: 2px;
            padding-bottom: 4px;
          }
        `}
      </style>
    </div>
  );
});

export default Input;
