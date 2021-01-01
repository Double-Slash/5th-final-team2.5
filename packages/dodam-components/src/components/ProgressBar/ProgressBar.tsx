import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  min?: number;
  max?: number;
  value: number;
}
const ROUND_PRECISION = 1000;
const getPercentage = (value, min, max) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const { height = 5, value = 0, min = 0, max = 100, style, className, ...rest } = props;

  const percent = getPercentage(value, min, max);
  return (
    <>
      <div className="percent-text">
        <Typography weight="bold" className="value" variant="span">
          {value}
        </Typography>
        <Typography variant="span">/</Typography>
        <Typography variant="span">{max}</Typography>
      </div>

      <div className={classNames('progress', className)} style={{ height }} {...rest}>
        <div
          ref={ref}
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percent}%`, ...style }}
          aria-valuenow={percent}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label="progressbar"
        />
      </div>

      <style jsx global>
        {`
          .percent-text {
            text-align: right;
            padding-bottom: 4px;
          }
          .percent-text span {
            margin: 0 4px;
            color: #bbbbbb;
            font-size: 14px;
          }
          .percent-text .value {
            color: #707070;
          }
        `}
      </style>
    </>
  );
});

export default ProgressBar;
