import { Input, Typography, Button } from '@dodam/components';
import { useRef } from 'react';

export default function Search() {
  const textWrapperRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const btnRef = useRef(null);

  const handleOnFocus = () => {
    textWrapperRef.current.classList.add('focused');
    textRef.current.classList.add('focused');
    bgRef.current.classList.add('focused');
    btnRef.current.classList.add('focused');
  };

  const handleOnBlur = () => {
    textWrapperRef.current.classList.remove('focused');
    textRef.current.classList.remove('focused');
    bgRef.current.classList.remove('focused');
    btnRef.current.classList.remove('focused');
  };

  return (
    <div className="search">
      <div className="bg" ref={bgRef} />
      <div className="text-wrapper" ref={textWrapperRef}>
        <Typography ref={textRef} className="text-school" variant="h2" align="center" weight="bold">
          본인의 학교를 검색하세요
        </Typography>
        <Input onFocus={handleOnFocus} onBlur={handleOnBlur} placeholder="학교 이름을 입력하세요" />
      </div>

      <div className="btn-wrapper" ref={btnRef}>
        <Button variant="secondary">테스트 시작</Button>
        <Button variant="secondary">테스트 시작2</Button>
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
            padding: 0px 32px;
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
