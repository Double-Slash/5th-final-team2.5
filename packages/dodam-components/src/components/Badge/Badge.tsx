import React from 'react';
import classNames from 'classnames';
import Typography, { TypographyProps } from '../Typography';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement>, Omit<TypographyProps, 'variant' | 'align'> {
  size?: 'small' | 'large' | 'larger';
  rounded?: boolean;
  color?: 'primary' | 'secondar' | 'danger' | 'success' | 'warning';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { size, rounded = true, color = 'primary', ...rest } = props;
  const classes = classNames('badge', rounded && 'rounded-pill', `bg-${color}`, size && `badge-${size}`);

  return (
    <>
      <Typography className={classes} variant="span" {...rest} ref={ref} />

      <style jsx global>
        {`
          .badge {
            padding: 0.5rem;
          }
          .badge-small {
            font-size: 0.6rem;
          }
          .badge-large {
            font-size: 0.9rem;
          }
          .badge-large {
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
});

export default Badge;
