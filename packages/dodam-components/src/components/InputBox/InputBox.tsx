import React from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';

export interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
  label?: string;
  selected?: date;
}

const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>((props, ref) => {
  const { multiline, id, label, type, ...rest } = props;
  const Component = multiline ? 'textarea' : 'input';

  if (type === 'date') {
    const { placeholder, selected = null, ...others } = rest;
    return (
      <div className="input-date-wrapper">
        <DatePicker
          {...others}
          selected={selected}
          className="form-control"
          ref={ref}
          popperPlacement="auto"
          placeholderText={placeholder}
        />
        {label && <label htmlFor={id}>{label}</label>}

        <style jsx global>{`
          .input-date-wrapper {
            display: flex;
            justify-content: center;
            padding: 8px 0;
          }
          .input-date-wrapper .react-datepicker__tab-loop {
            position: absolute;
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
        `}</style>
      </div>
    );
  }
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <Component id={id} className="form-control" ref={ref} {...rest} />

      <style jsx>
        {`
          textarea {
            min-height: 120px;
            border-radius: 0;
          }
          input {
            border-radius: 0;
          }
        `}
      </style>
    </>
  );
});

export default InputBox;
