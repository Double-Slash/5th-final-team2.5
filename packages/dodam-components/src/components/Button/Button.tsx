import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  disabled?: boolean;
  outline?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, outline, fullWidth, children, size, variant = 'primary', type = 'button', ...rest } = props;
  const prefix = 'btn';

  const classes = classNames(
    className,
    prefix,
    outline ? `${prefix}-outline-${variant}` : `${prefix}-${variant}`,
    fullWidth && 'w-100',
    size === 'large' && `${prefix}-lg`,
    size === 'small' && `${prefix}-sm`
  );

  return (
    // dynamic type을 지원하지 않음
    // eslint-disable-next-line react/button-has-type
    <button ref={ref} className={classes} type={type} {...rest}>
      {children}
      <style jsx>
        {`
          .btn {
            height: 46px;
            border-radius: 0;
          }
        `}
      </style>
    </button>
  );
});

export default Button;
