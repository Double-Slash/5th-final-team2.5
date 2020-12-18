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
    ...rest
  } = props;
  const prefix = 'btn';

  const classes = classNames(
    className,
    prefix,
    outline ? `${prefix}-outline-${variant}` : `${prefix}-${variant}`,
    fullWidth && 'w-100',
    `${prefix}-${prefixSize(size)}`
  );

  return (
    // dynamic type을 지원하지 않음
    // eslint-disable-next-line react/button-has-type
    <button ref={ref} className={classes} type={type} {...rest}>
      {children}
      <style jsx>
        {`
          .btn {
            border-radius: 0;
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
