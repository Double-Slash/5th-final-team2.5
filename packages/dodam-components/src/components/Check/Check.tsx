import React from 'react';

export interface CheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'radio' | 'checkbox';
  label?: string;
}

const Check = React.forwardRef<HTMLInputElement, CheckProps>((props, ref) => {
  const { label, id, type = 'radio', ...rest } = props;
  return (
    <div className="form-check">
      <input {...rest} type={type} className="form-check-input" id={id} ref={ref} />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

export default Check;
