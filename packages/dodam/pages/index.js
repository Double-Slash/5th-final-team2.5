import { Button } from '@dodam/components';
import Image from 'next/image';
import GridView from '@/components/GridView.js';
import { Typography } from '@dodam/components';
import RankingtView from '@/components/RankingView';

const data = [
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

const weekData = [
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
  return (
    <div className="row wrapper">
      <div className="first-container mb-3">
        <div className="title-wrapper">
          <Typography className="title">나에게 맞는 최적의 동아리는?</Typography>
          <Typography weight="bold" variant="h3">
            성격유형분석을 통한
          </Typography>
          <Typography weight="bold" variant="h3">
            동아리 맞춤 서비스를 만나보세요
          </Typography>
          <div className="test-start">
            <Button className="test-button">
              <Typography className="button-text" align="center" variant="span">
                테스트 시작
              </Typography>
            </Button>
          </div>
        </div>
      </div>

      <div className="row ranking mb-5">
        <div className="row d-flex align-items-center">
          <div className="col-2 d-flex align-items-center">
            <Image className="ranking-image" src="/../public/images/ic_ranking.svg" height="24px" width="24px" />
          </div>
          <div className="col">
            <Typography className="section-title" weight="bold" variant="h5">
              금주 동아리 랭킹
            </Typography>
          </div>
        </div>
        <div className="row mt-3">
          <RankingtView data={weekData} />
        </div>
      </div>

      <div className="row real-time mb-5">
        <div className="row d-flex align-items-center">
          <div className="col-2 d-flex align-items-center">
            <Image className="real-time-image" src="/../public/images/ic_real time.svg" height="24px" width="24px" />
          </div>
          <div className="col">
            <Typography className="section-title" weight="bold" variant="h5">
              실시간 모집공고
            </Typography>
          </div>
          <div className="col-2 d-flex align-items-center">
            <Image className="overview-image" src="/../public/images/ic_overview.svg" height="24px" width="24px" />
          </div>
        </div>
        <div className="row mt-3">
          <GridView data={data} />
        </div>
      </div>
      <div className="row footer">
        <span variant="span">
          도담도담 소개 | 이용약관 | 개인정보처리방침
          <br />
          서울특별시 강남구(도담도담)
          <br />
          Copyright 2020. DodamDodam All rights reserved.
          <br />
        </span>
      </div>

      <style jsx>
        {`
          .wrapper {
            position: absolute;
            top: 50px;
          }
          .first-container {
            height: 450px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-image: url('/../images/mainBanner.png');
          }
          .title-wrapper {
            margin-left: 36px;
            padding-top: 53px;
            color: #242424;
            opacity: 1;
          }
          .ranking,
          .real-time {
            margin-left: 36px;
            padding-top: 36px;
          }
          .footer {
            background-color: #000000;
            color: white;
            text-align: center;
            padding-top: 10%;
            padding-bottom: 10%;
          }
          .test-start :global(.test-button) {
            top: 208px;
            left: 36px;
            width: 106px;
            height: 38px;
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
