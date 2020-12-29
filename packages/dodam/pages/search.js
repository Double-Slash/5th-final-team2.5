import { useRef, useEffect, useState } from 'react';
import { Typography, Button } from '@dodam/components';
import Autocomplete from '@/components/Autocomplete';
import CollegeData from '@/utils/colleges';

/**
 * suggestion이 보여지는 경우: verified가 되지 않는 상태에서 focus또는 change 되는 경우
 * suggestion이 숨겨지는 경우: verified가 된 경우. value가 공백인 경우에 onBlur 또는 backspace 누른 경우
 * 테스트 시작은 keyword가 verified된 경우에 가능
 */

export default function Search() {
  const textWrapperRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const btnRef = useRef(null);
  const [sugVisibility, setSugVisibility] = useState(false);
  const [keyword, setKeyword] = useState({
    value: '',
    verified: false,
  });

  const showSuggestion = () => {
    [textWrapperRef, textRef, bgRef, btnRef].forEach((ref) => {
      ref.current.classList.add('focused');
    });
  };

  const hideSuggestion = () => {
    [textWrapperRef, textRef, bgRef, btnRef].forEach((ref) => {
      ref.current.classList.remove('focused');
    });
  };

  const handleOnFocus = ({ target: { value } }) => {
    if (keyword.verified && keyword.value === value) return;
    showSuggestion();
  };

  // suggestion에서 선택되면 verified = true로 콜백됨.
  const handleChange = (name, verified) => {
    if (!name) {
      setKeyword({ value: name, verified: false });
      return;
    }
    // verify가 되지 않는 키워드로 변경되면 다시 suggestion을 보여준다.
    if (!verified && !textWrapperRef.current.classList.contains('focused')) {
      setKeyword({
        value: name,
        verified: false,
      });
      showSuggestion();
      return;
    }

    setKeyword({
      value: name,
      verified: true,
    });
  };

  useEffect(() => {
    function onCompleted(evt) {
      if (evt.propertyName !== 'transform') return;

      if (evt.target.classList.contains('focused')) {
        setSugVisibility(true);
      }
      if (!evt.target.classList.contains('focused')) {
        setSugVisibility(false);
      }
    }
    function onStart(evt) {
      if (evt.propertyName !== 'transform') return;

      setSugVisibility(false);
    }

    textWrapperRef.current.addEventListener('transitionend', onCompleted);
    textWrapperRef.current.addEventListener('transitionstart', onStart);
    return () => {
      textWrapperRef.current.removeEventListener('transitionend', onCompleted);
      textWrapperRef.current.removeEventListener('transitionstart', onStart);
    };
  }, [textWrapperRef]);

  return (
    <div className="search">
      <div className="bg" ref={bgRef} />
      <div className="text-wrapper" ref={textWrapperRef}>
        <Typography ref={textRef} className="text-school" variant="h3" align="center" weight="bold">
          본인의 학교를 검색하세요
        </Typography>
        <Autocomplete
          onFocus={handleOnFocus}
          onBlur={hideSuggestion}
          onChange={handleChange}
          placeholder="학교 이름을 입력하세요."
          visibility={sugVisibility}
          data={CollegeData}
        />
      </div>

      <div className="btn-wrapper" ref={btnRef}>
        <Button variant="secondary" outline>
          이전으로
        </Button>
        <Button variant="secondary" disabled={!keyword.verified}>
          테스트 시작
        </Button>
      </div>

      <style jsx>
        {`
          .search {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .search .text-wrapper {
            transform: translate(0, calc(30vh));
            transition: transform 0.75s ease;
            padding: 0px 8px;
          }
          .search .text-wrapper.focused {
            transform: translate(0, -64px);
          }

          :global(.search .text-school) {
            margin-bottom: 32px;
            opacity: 1;
            transition: opacity 0.5s ease;
          }
          :global(.search .text-school.focused) {
            opacity: 0;
          }

          .search .bg {
            position: absolute;
            left: 0;
            top: 50px;
            height: 70%;
            width: 100%;
            background-image: linear-gradient(180deg, #fff6d9 0%, #ffffff 100%, #ffffff 100%);
            transition: opacity 0.5s linear;
            opacity: 1;
            z-index: -10;
          }
          .search .bg.focused {
            opacity: 0;
          }

          .search .btn-wrapper {
            position: absolute;
            padding: 8px;
            left: 0;
            bottom: 0;
            display: flex;
            width: 100%;
            transition: opacity 0.5s ease;
            opacity: 1;
          }
          .search .btn-wrapper.focused {
            opacity: 0;
          }
          :global(.search .btn-wrapper .btn) {
            flex: 1;
            margin: 8px;
          }
        `}
      </style>
    </div>
  );
}
