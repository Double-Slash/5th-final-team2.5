import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  fullWidth?: boolean;
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  disabled?: boolean;
  outline?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant = 'primary', outline, fullWidth, children, size, ...rest } = props;
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
    <button ref={ref} className={classes} {...rest}>
      {children}
      <style jsx>{`
        .btn {
          height: 46px;
          border-radius: 0;
        }
      `}</style>
    </button>
  );
});

export default Button;
