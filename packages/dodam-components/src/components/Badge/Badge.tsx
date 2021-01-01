import React from 'react';
import classNames from 'classnames';
import Typography, { TypographyProps } from '../Typography';

export interface BadgeProps extends Omit<TypographyProps, 'variant' | 'align'> {
  size?: 'small' | 'large' | 'larger';
  rounded?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

const Badge = React.forwardRef<HTMLParagraphElement & HTMLHeadingElement & HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const { size, rounded = true, color = 'primary', className, ...rest } = props;
    const classes = classNames('badge', rounded && 'rounded-pill', `bg-${color}`, size && `badge-${size}`, className);

    return (
      <>
        <Typography className={classes} variant="span" {...rest} ref={ref} />

        <style jsx global>
          {`
            .badge {
              padding: 8px;
            }
            .badge-small {
              font-size: 10px;
            }
            .badge-large {
              font-size: 14px;
            }
            .badge-larger {
              font-size: 16px;
            }
          `}
        </style>
      </>
    );
  }
);

export default Badge;
