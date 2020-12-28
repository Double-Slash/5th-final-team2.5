import { useState, useEffect, useMemo } from 'react';
import { Input, Typography } from '@dodam/components';
import classNames from 'classnames';
import Hangul from 'hangul-js';

function SuggestionItem({ text, before = '', after = '' }) {
  return (
    <div className="suggestion-item">
      <Typography variant="span">{before}</Typography>
      <Typography variant="span" className="text-primary">
        {text}
      </Typography>
      <Typography variant="span">{after}</Typography>
    </div>
  );
}

function NoSuggestion() {
  return <Typography className="no-suggestion">검색 결과가 없습니다.</Typography>;
}

export default function Autocomplete({ onFocus, onBlur, placeholder, visibility, data = [] }) {
  const [keyword, setKeyword] = useState('');
  const [chosung, setChosung] = useState([]);
  const [suggestList, setSuggestList] = useState([]);

  useEffect(() => {
    const disassembled = data.reduce((acc, cur) => {
      const joinedChosung = Hangul.disassemble(cur, true)
        .map((letters) => letters[0])
        .join('');

      return acc.concat(joinedChosung);
    }, []);

    setChosung(disassembled);
  }, [data]);

  const handleChange = ({ target: { value } }) => {
    let searchRes;
    if (Hangul.isChoAll(value)) {
      searchRes = chosung.reduce((acc, cur, idx) => {
        const rangeSearched = Hangul.rangeSearch(cur, value);

        if (rangeSearched.length) {
          return acc.concat({ range: rangeSearched[0], name: data[idx] });
        }
        return acc;
      }, []);
    } else {
      searchRes = data.reduce((acc, cur) => {
        const rangeSearched = Hangul.rangeSearch(cur, value);

        if (rangeSearched.length) {
          return acc.concat({ range: rangeSearched[0], name: cur });
        }
        return acc;
      }, []);
    }

    setSuggestList(searchRes);
    setKeyword(value);
  };

  const getSuggestList = useMemo(() => {
    if (!suggestList.length) return <NoSuggestion />;

    return suggestList.map(({ name, range }) => (
      <SuggestionItem
        key={name}
        text={name.slice(range[0], range[1] + 1)}
        before={name.slice(0, range[0])}
        after={name.slice(range[1] + 1, name.length)}
      />
    ));
  }, [suggestList]);

  return (
    <>
      <Input value={keyword} onBlur={onBlur} onChange={handleChange} onFocus={onFocus} placeholder={placeholder} />
      <div className={classNames('suggestions', !visibility && 'd-none')}>{getSuggestList}</div>

      <style jsx global>
        {`
          .suggestions .no-suggestion {
            color: #cdcdcd;
            font-size: 18px;
          }
          .suggestions .no-suggestion {
            color: #cdcdcd;
            font-size: 18px;
          }
          .suggestions .suggestion-item {
            font-size: 18px;
            margin: 0;
            padding: 8px 0;
          }
        `}
      </style>
    </>
  );
}
