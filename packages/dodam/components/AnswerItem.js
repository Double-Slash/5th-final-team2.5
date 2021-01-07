import { Button } from '@dodam/components';
import classNames from 'classnames';

const AnswerItem = ({ answer, selected, onSelected }) => {
  const classes = classNames('answer', selected && 'bg-primary');

  return (
    <div className="buttons">
      <Button className={classes} outline value={answer} onClick={onSelected}>
        {answer}
      </Button>
      <style jsx>
        {`
          .buttons {
            display: flex;
            justify-content: center;
          }
          .buttons :global(.answer) {
            margin-bottom: 16px;
            width: 240px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default AnswerItem;
