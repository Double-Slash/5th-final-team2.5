import React from 'react';
import Check from '../Check';

export interface RadioGroupProps {
  items: string[];
  onChange?: (string) => void;
  selected?: string;
}

function RadioGroup({ items, onChange, selected }: RadioGroupProps) {
  const handleChange = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(name);
  };

  return (
    <div className="radio-group row">
      {items.map((item, idx) => (
        <Check
          onChange={handleChange}
          checked={item === selected}
          label={item}
          name={item}
          id={item}
          type="radio"
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          inline
        />
      ))}

      <style jsx>
        {`
          .radio-group {
            margin-left: 0;
            margin-right: 0;
          }
        `}
      </style>
    </div>
  );
}

export default RadioGroup;
