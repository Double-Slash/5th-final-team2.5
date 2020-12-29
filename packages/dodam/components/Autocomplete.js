import { useState, useEffect, useMemo, useRef } from 'react';
import { Input, Typography } from '@dodam/components';
import classNames from 'classnames';
import Hangul from 'hangul-js';

function SuggestionItem(props) {
  const { text, before = '', after = '', selected = false, onClick } = props;
  return (
    <div
      className={classNames('suggestion-item', selected && 'selected')}
      onClick={() => onClick([before, text, after].join(''))}>
      <Typography variant="span">{before}</Typography>
      <Typography variant="span" className="text-primary">
        {text}
      </Typography>
      <Typography variant="span">{after}</Typography>
    </div>
  );
}

function NoSuggestion() {
  return <Typography className="no-suggestion text-secondary">검색 결과가 없습니다.</Typography>;
}

/**
 *
 * @param {onFocus, onBlur, onChange, placeholder, visibility, data} param0
 * onFocus = input이 focus되면 실행
 * onBlur = suggestion이 선택되거나 input의 value가 공백인상태에서 backspace를 누르면 실행
 * onChange = input에 onChange 이벤트가 실행되면 value, verified를 반환. suggestion에서 선택된 경우 verified = true
 */
export default function Autocomplete({ onFocus, onBlur, onChange, placeholder, visibility, data = [] }) {
  const [keyword, setKeyword] = useState('');
  const [chosung, setChosung] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    const disassembled = data.reduce((acc, cur) => {
      const joinedChosung = Hangul.disassemble(cur, true)
        .map((letters) => letters[0])
        .join('');

      return acc.concat(joinedChosung);
    }, []);

    setChosung(disassembled);
  }, [data]);

  useEffect(() => {
    const onKeyInput = ({ keyCode }) => {
      if (keyCode === 40) {
        // arrowDown
        setSelectedItem((prev) => (prev + 1 < suggestList.length ? prev + 1 : prev));
      } else if (keyCode === 38) {
        // arrowUp
        setSelectedItem((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
      } else if (keyCode === 13) {
        // enter
        if (selectedItem < 0) return;

        handleItemSelected(suggestList[selectedItem].name);
      } else if (keyCode === 8) {
        // backspace
        if (!keyword) onBlur();
      } else if (keyCode === 27) {
        // escape
        onBlur();
      }
    };

    inputRef.current.addEventListener('keydown', onKeyInput);
    return () => inputRef.current.removeEventListener('keydown', onKeyInput);
  }, [suggestList, selectedItem]);

  const handleChange = ({ target: { value } }) => {
    let searchRes;
    try {
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
    } catch (err) {
      console.error(err);
      searchRes = [];
    }

    setSelectedItem(0);
    setSuggestList(searchRes);
    setKeyword(value);
    onChange(value, false);
  };

  const handleItemSelected = (selected) => {
    setSelectedItem(0);
    setKeyword(selected);
    onChange(selected, true);
    onBlur();
  };

  const handleBlur = () => {
    if (!keyword) onBlur();
  };

  const getSuggestList = useMemo(() => {
    if (!keyword) return null;
    if (!suggestList.length) return <NoSuggestion />;

    return suggestList.map(({ name, range }, idx) => (
      <SuggestionItem
        key={name}
        text={name.slice(range[0], range[1] + 1)}
        before={name.slice(0, range[0])}
        after={name.slice(range[1] + 1, name.length)}
        selected={idx === selectedItem}
        onClick={handleItemSelected}
      />
    ));
  }, [suggestList, selectedItem]);

  return (
    <>
      <Input
        ref={inputRef}
        value={keyword}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className="auto-input"
      />
      <div className={classNames('suggestions', !visibility && 'd-none')}>{getSuggestList}</div>

      <style jsx global>
        {`
          .suggestions .no-suggestion {
            font-size: 18px;
          }
          .suggestions .suggestion-item {
            font-size: 18px;
            margin: 0;
            padding: 8px;
          }
          .suggestions .suggestion-item:hover {
            background-color: #eee;
            cursor: pointer;
          }
          .suggestions .suggestion-item.selected {
            background-color: #eee;
          }
          .suggestions .auto-input {
            padding: 0px 8px;
          }
        `}
      </style>
    </>
  );
}
