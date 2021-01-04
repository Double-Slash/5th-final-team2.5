import React from 'react';
import classNames from 'classnames';

export interface CardProps  extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?:string;
  label?:string;
  description?:string;
}
function Card({ label, imageSrc,description }: CardProps) {

 
  return (
<div className="col">
    <div className="card border-light">
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
    </div>
  );
}

export default Card;
