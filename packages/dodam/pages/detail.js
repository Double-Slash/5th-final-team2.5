import { useState } from 'react';
import { Typography, InputBox, Button } from '@dodam/components';
import { BadgeWithTypo } from '@dodam/components/src/components/Badge/Badge.stories';
import Tags from '../components/Tags';
import PosterImage from '../components/PosterImage';

const detail = () => {
  const [comment, setComment] = useState('');
  const [readMode, setMode] = useState(true);

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    console.log(comment);
  };
  const renderMode = () => {
    if (readMode) {
      return <div className="icon" />;
    }
    return <div className="icon" />;
  };

  return (
    <div className="main-container">
      <div className="group-info">
        <div className="row">
          <div className="col-2">
            <div className="group-profile" />
          </div>
          <div className="col-8">
            <div className="group-name">더블슬래쉬</div>
          </div>
          <div className="col-2">{renderMode()}</div>
        </div>
        <Tags />
      </div>
      <PosterImage />
      <div className="recruit-info">
        <div className="subtitle">모집기간</div>
        <BadgeWithTypo />
        <div className="subtitle">모집내용</div>
        <Typography className="recruit-details">
          동아리모집공고글동아리모집공고글동아리 모집공고글동아리모집공고글동아리모집공
          동아리모집공고글동아리모집공고글동아리
        </Typography>
        <div className="subtitle">담당자 Q&A</div>
        <div className="input-wrapper">
          <div className="input-box">
            <InputBox placeholder="댓글을 남겨보세요" onChange={handleInput} />
          </div>
          <Button size="small" type="submit" className="submit-button" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .group-info {
            margin-top: 14px;
            margin-left: 12px;
            margin-right: 12px;
          }
          .group-profile {
            width: 40px;
            height: 40px;
            border-radius: 75px;
            background-color: #d9d9d9;
          }
          .group-name {
            margin-top: 7px;
            font-size: 18px;
            font-weight: bold;
            font-color: #191919;
          }
          :global(.icon) {
            margin-top: 10px;
            width: 22px;
            height: 22px;
            border-radius: 75px;
            background-color: #d9d9d9;
          }
          .recruit-info {
            margin-left: 12px;
            margin-right: 12px;
          }
          :global(.recruit-details) {
            margin-top: 8px;
          }
          :global(.subtitle:nth-child(1)) {
            font-size: 16px;
            font-weight: bold;
            margin-top: 18px;
            margin-bottom: 8px;
          }
          :global(.subtitle:nth-child(2n + 3)) {
            font-size: 16px;
            font-weight: bold;
            margin-top: 28px;
            margin-bottom: 8px;
          }
          .input-wrapper {
            display: flex;
          }
          .input-box {
            flex: 6;
          }
          :global(.submit-button) {
            margin-left: 8px;
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};
export default detail;
