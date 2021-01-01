import React from 'react';
import classNames from 'classnames';

export interface FormGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  required?: boolean;
  name: string;
}

const FormGroup = React.forwardRef<HTMLFieldSetElement, FormGroupProps>((props, ref) => {
  const { required = false, name, children, className, ...rest } = props;
  const classes = classNames('form-legend', required && 'form-required');

  return (
    <fieldset className={classNames('form-group', className)} {...rest} ref={ref}>
      {name && <legend className={classes}>{name}</legend>}
      {children}

      <style jsx>
        {`
          .form-group {
            padding: 8px 0;
          }
          .form-legend {
            color: #707070;
            font-size: 16px;
          }
          .form-required:after {
            content: '*';
          }
        `}
      </style>
    </fieldset>
  );
});

export default FormGroup;
