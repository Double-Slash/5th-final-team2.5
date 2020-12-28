import { Input, Typography } from '@dodam/components';
import classNames from 'classnames';

function SuggestionItem({ text, before, after }) {
  return (
    <>
      <Typography className="text-primary suggestion-item">{text}</Typography>
      <style jsx global>
        {`
          .suggestions .suggestion-item {
            font-size: 18px;
            margin: 0;
            padding: 8px 0;
          }
          .suggestion-item::before {
            content: '${before}';
            color: #000;
          }
          .suggestion-item::after {
            content: '${after}';
            color: #000;
          }
        `}
      </style>
    </>
  );
}

function NoSuggestion() {
  return (
    <>
      <Typography className="no-suggestion">검색 결과가 없습니다.</Typography>
      <style jsx>
        {`
          :global(.suggestions .no-suggestion) {
            color: #cdcdcd;
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}

export default function Autocomplete({ onFocus, onBlur, placeholder, visibility }) {
  // TODO: Display suggestion item based on input value
  // eslint-disable-next-line arrow-body-style
  const Suggestion = () => {
    return (
      <>
        <NoSuggestion />
        <SuggestionItem text="가나다" before="마" after="라 대학교" />
        <SuggestionItem text="가나다" before="마" after="라 대학교" />
        <SuggestionItem text="가나다" before="마" after="라 대학교" />
      </>
    );
  };
  return (
    <>
      <Input onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
      <div className={classNames('suggestions', !visibility && 'd-none')}>{Suggestion()}</div>
    </>
  );
}
