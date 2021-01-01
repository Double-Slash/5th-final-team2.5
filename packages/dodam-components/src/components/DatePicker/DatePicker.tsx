import React from 'react';
import classNames from 'classnames';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

export interface DateProps extends ReactDatePickerProps {
  label?: string;
  placeholder?: string;
}

const DatePicker = React.forwardRef<ReactDatePicker, DateProps>((props, ref) => {
  const { selected, placeholder, id, label, className, ...others } = props;

  return (
    <div className="input-date-wrapper">
      <ReactDatePicker
        {...others}
        ref={ref}
        selected={selected}
        className={classNames('form-control', className)}
        popperPlacement="auto"
        placeholderText={placeholder}
      />

      {label && <label htmlFor={id}>{label}</label>}

      <style jsx global>
        {`
          .input-date-wrapper {
            display: flex;
            justify-content: center;
            padding: 8px 0;
          }
          .input-date-wrapper .react-datepicker-wrapper {
            flex: 1;
            margin-right: 0px;
          }
          .input-date-wrapper label {
            min-width: 30px;
            padding: 8px;
            text-align: center;
            vertical-align: middle;
            line-height: 22px;
          }
        `}
      </style>
    </div>
  );
});

export default DatePicker;
