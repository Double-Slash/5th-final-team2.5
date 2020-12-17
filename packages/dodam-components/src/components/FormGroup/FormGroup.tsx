import React from 'react';
import classNames from 'classnames';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  required?: boolean;
  name?: string;
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { required = false, name, children, ...rest } = props;
  const classes = classNames('form-legend', required && 'form-required');

  return (
    <div className="form-group" {...rest} ref={ref}>
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
    </div>
  );
});

export default FormGroup;
