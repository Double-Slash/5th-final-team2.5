import React from 'react';
import classNames from 'classnames';

export interface FormProps {
  label: string;
  id?: string;
  required?: boolean;
}

function withForm<T extends FormProps>(WrappedComponent: React.ComponentType<T>) {
  return function FormComponent(props: T) {
    const { label, id, required = false } = props;
    const classes = classNames('form-label', required && 'form-required');

    return (
      <div className="form-group container">
        <label className={classes} htmlFor={id}>
          {label}
        </label>
        <WrappedComponent {...props} />

        <style jsx>
          {`
            .form-group {
              padding: 8px 0;
            }
            .form-required {
              color: #707070;
            }
            .form-required:after {
              content: '*';
            }
          `}
        </style>
      </div>
    );
  };
}

export default withForm;
