import { useState } from 'react';
import { Typography, InputBox, Button, Badge } from '@dodam/components';

const RecruitInfo = () => {
  const [comment, setComment] = useState('');

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <div className="recruit-info">
      <Typography weight="bold" className="subtitle">
        모집기간
      </Typography>
      <Badge>D-4</Badge>
      <Typography inline className="recruit-date" variant="h6">
        11월 25일(수) ~ 12월 9일(수)
      </Typography>
      <Typography weight="bold" className="subtitle">
        모집내용
      </Typography>
      <Typography className="recruit-details">
        동아리모집공고글동아리모집공고글동아리 모집공고글동아리모집공고글동아리모집공
        동아리모집공고글동아리모집공고글동아리
      </Typography>
      <Typography weight="bold" className="subtitle">
        담당자 Q&A
      </Typography>
      <form onSubmit={handleSubmit} className="input-wrapper">
        <InputBox className="input-box form-control" placeholder="댓글을 남겨보세요" onChange={handleInput} />
        <Button size="small" type="submit" className="submit-button" onClick={handleSubmit}>
          등록
        </Button>
      </form>
      <style jsx>{`
        .recruit-info {
          margin-left: 8px;
          margin-right: 8px;
        }
        :global(.recruit-date) {
          margin-left: 0.5rem;
          margin-bottom: 24px;
        }
        :global(.recruit-details) {
          margin-top: 8px;
        }
        :global(.subtitle:nth-child(1)) {
          margin-top: 16px;
          margin-bottom: 8px;
        }
        :global(.subtitle:nth-child(2n + 3)) {
          margin-top: 24px;
          margin-bottom: 8px;
        }
        .input-wrapper {
          display: flex;
        }
        :global(.input-box) {
          flex: 6;
        }
        :global(.submit-button) {
          margin-left: 8px;
          flex: 1;
        }
      `}</style>
    </div>
  );
};
export default RecruitInfo;
