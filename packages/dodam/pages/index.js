import { Button } from '@dodam/components';
import mainBanner from '@/images/mainBanner.png';
import GridView from '@/components/GridView.js';

let data = [
  {
    imageUrl: '1.png',
    title: '1번 타이틀',
  },
  {
    imageUrl: '2.png',
    title: '2번 타이틀',
  },
  {
    imageUrl: '3.png',
    title: '3번 타이틀',
  },
  {
    imageUrl: '4.png',
    title: '4번 타이틀',
  },
];

let weekData = [
  {
    imageUrl: '1.png',
    title: '1번 타이틀',
  },
  {
    imageUrl: '2.png',
    title: '2번 타이틀',
  },
  {
    imageUrl: '3.png',
    title: '3번 타이틀',
  },
];

export default function Main() {
  const dataList = weekData.map((data, i) => (
    <div className="col-4">
      <img className="img-temp" src={data.imageUrl} />
      <div className="title-temp">{data.title}</div>
    </div>
  ));
  return (
    <div className="w-100">
      <div className="first-container">
        <div className="title-wrapper">
          <div className="title">나에게 맞는 최적의 동아리는?</div>
          <div className="sub-title">
            성격유형분석을 통한 <br />
            동아리맞춤 서비스를 만나보세요
          </div>
          <Button className="test-start">테스트 시작</Button>
        </div>
      </div>
      <div className="container">
        <div className="section-title">금주 동아리 랭킹</div>
        <div className="row">{dataList}</div>
      </div>
      <div className="container">
        <div className="section-title">실시간 모집공고</div>
        <GridView data={data} />
      </div>
      <div className="footer">
        <span>FOOOOOOOOOOOTTTTTTTTTTTTEEEEEEEEEEERRRRRR</span>
      </div>
      <style jsx>
        {`
          .first-container {
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(${mainBanner});
            padding-bottom: 100%;
          }
          .title-wrapper {
            margin-left: 40px;
            padding-top: 53px;
            color: #242424;
            opacity: 1;
          }
          .title {
            font: normal normal normal 13px/19px Noto Sans CJK KR;
            letter-spacing: -0.65px;
          }
          .sub-title {
            font: normal normal bold 22px/32px Noto Sans CJK KR;
            letter-spacing: -1.1px;
          }
          .section-title {
            text-align: left;
            font: normal normal bold 20px/29px Noto Sans CJK KR;
            letter-spacing: -1px;
            color: #191919;
            opacity: 1;
          }
          .footer {
            background-color: #000000;
            color: white;
            text-align: center;
            padding-top: 10%;
            padding-bottom: 10%;
          }
        `}
      </style>
      <style jsx global>
        {`
          .test-start {
            background: #191919 0% 0% no-repeat padding-box;
            border-radius: 19px;
            opacity: 1;
            margin-top: 28px;
          }
        `}
      </style>
    </div>
  );
}
