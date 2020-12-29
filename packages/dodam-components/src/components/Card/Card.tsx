import React from 'react';
import classNames from 'classnames';

export interface CardProps extends React.InputHTMLAttributes<HTMLInputElement> {
  imageSrc?:string;
  label?:string;
  description?:string;

}

const Card = React.forwardRef<HTMLInputElement, CardProps>((props, ref) => {
  const { label, id,imageSrc,description,  ...rest } = props;
  const classes = classNames("card border-light");
  return (

    <div className={classes}>
        <style jsx>
          {`
         
            .card {
              width: 146px;
            }
         
            .card-body {
              padding: 8px;
            }
            .card-text {
              font-size: 12px;
            }

            .card-img-top {
              width: 146px;
              height: 146px;
              background-color: #aaa;
              cursor: pointer;
              border-radius: 6px;
            }
          `}
        </style>
        <img src={imageSrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{description}</p>
                  </div>
    </div>
  );
});

export default Card;
