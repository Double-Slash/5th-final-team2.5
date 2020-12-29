import React from 'react';
import classNames from 'classnames';

type buttonSizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  size?: buttonSizes;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  disabled?: boolean;
  outline?: boolean;
  type?: 'button' | 'reset' | 'submit';
  active?: boolean;
}

const prefixSize = (size: buttonSizes) => {
  if (size === 'small') return 'sm';
  if (size === 'medium') return 'md';
  return 'lg';
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    outline,
    fullWidth,
    children,
    size = 'medium',
    variant = 'primary',
    type = 'button',
    active = false,
    ...rest
  } = props;
  const prefix = 'btn';

  const classes = classNames(
    className,
    prefix,
    outline ? `${prefix}-outline-${variant}` : `${prefix}-${variant}`,
    fullWidth && 'w-100',
    `${prefix}-${prefixSize(size)}`,
    active && 'active'
  );

  return (
    // dynamic type을 지원하지 않음
    // eslint-disable-next-line react/button-has-type
    <button ref={ref} className={classes} type={type} {...rest}>
      {children}
      <style jsx>
        {`
          .btn {
            border-radius: 6px;
          }
          .btn-primary {
            color: #fff;
          }
          .btn-secondary {
            color: #fff;
            background-color: #000;
          }
          .btn-secondary:disabled {
            background-color: #cdcdcd;
          }
          .btn-outline-primary {
            color: #000;
          }
          .btn-outline-primary:hover {
            color: #fff;
          }
          .btn-outline-secondary {
            color: #000;
          }
          .btn-outline-secondary:hover {
            color: #fff;
          }
          .btn-md {
            height: 46px;
          }
          .btn-sm {
            height: 40px;
          }
          .btn-height {
            height: ∂;
          }
        `}
      </style>
    </button>
  );
});

export default Button;
