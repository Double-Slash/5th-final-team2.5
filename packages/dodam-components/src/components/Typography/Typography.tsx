import React from 'react';
import classNames from 'classnames';

type WeightTypes = 'bolder' | 'bold' | 'normal' | 'light' | 'lighter';
type AlignTypes = 'left' | 'center' | 'right';
type TypographyRefs = HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | 'span';
  align?: AlignTypes;
  noWrap?: boolean;
  italic?: boolean;
  weight?: WeightTypes;
  inline?: boolean;
}

const mapAlignClass = (align: AlignTypes) => {
  if (align === 'left') return 'text-start';
  if (align === 'center') return 'text-center';
  return 'text-end';
};

const Typography = React.forwardRef<TypographyRefs, TypographyProps>((props, ref) => {
  const {
    variant = 'p',
    weight = 'normal',
    align = 'left',
    noWrap = false,
    className,
    italic = false,
    inline = false,
    children,
    ...rest
  } = props;

  const Component = variant;
  const classes = classNames(
    className,
    `fw-${weight}`,
    mapAlignClass(align),
    noWrap ? 'text-nowrap' : 'text-wrap',
    italic && 'fst-italic',
    inline && 'typography-inline'
  );

  return (
    <Component className={classes} {...rest} ref={ref}>
      {children}
      <style jsx>
        {`
          .typography {
            margin: 8px;
          }
          .typography-inline {
            display: inline-block;
          }
        `}
      </style>
    </Component>
  );
});

export default Typography;
