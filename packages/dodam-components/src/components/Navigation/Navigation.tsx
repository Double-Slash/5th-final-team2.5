import React from 'react';
import Typography from '../Typography';

// TODO: 네비게이션에 맞는 이미지 설정 + background-color gui에 맞게 수정
export interface NavigationProps extends React.HTMLAttributes<HTMLHeadElement> {
  title: string;
}
const Navigation = React.forwardRef<HTMLHeadElement, NavigationProps>((props, ref) => {
  const { title, ...rest } = props;

  return (
    <header className="dodam-header" {...rest} ref={ref}>
      <img className="header-img" alt="" />
      <Typography className="header" align="center" variant="h6">
        {title}
      </Typography>

      <style jsx global>
        {`
          .dodam-header {
            height: 50px;
            position: fixed;
            top: 0;
            left: auto;
            right: 0;
            width: 100%;
            z-index: 1100;
            background: #fff;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 8px;
          }
          .dodam-header .header {
            flex: 1;
            margin: 0;
            font-weight: 700 !important;
            font-size: 18px;
          }
          .dodam-header .header-img {
            height: 24px;
            width: 24px;
            cursor: pointer;
            position: absolute;
            left: 8px;
            display: none;
          }
        `}
      </style>
    </header>
  );
});

export default Navigation;
