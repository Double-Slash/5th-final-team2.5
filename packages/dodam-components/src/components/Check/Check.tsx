import React from 'react';
import classNames from 'classnames';

export interface CheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'radio' | 'checkbox';
  label?: string;
  inline?: boolean;
}

const Check = React.forwardRef<HTMLInputElement, CheckProps>((props, ref) => {
  const { label, id, type = 'radio', inline = true, className, ...rest } = props;
  const classes = classNames('form-check', inline && 'col-lg-3 col-md-4 col-6');
  return (
    <div className={classes}>
      <input {...rest} type={type} className={classNames('form-check-input', className)} id={id} ref={ref} />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

export default Check;
