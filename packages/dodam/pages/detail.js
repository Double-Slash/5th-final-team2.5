import GroupInfo from '@/components/GroupInfo';
import RecruitInfo from '@/components/RecruitInfo';
import PosterImage from '@/components/PosterImage';

const detail = () => {
  const tags = [
    {
      tag: '봉사',
    },
    {
      tag: '서울',
    },
    {
      tag: '10~30명',
    },
  ];
  return (
    <div className="main-container">
      <GroupInfo name="더블슬래쉬" tags={tags} />
      <PosterImage />
      <RecruitInfo
        startDate="11월 25일(수)"
        dueDate="12월 9일(수)"
        content="동아리모집공고글동아리모집공고글동아리모집공고글동아리모집공고글동아리모집공고글"
      />
      <style jsx>
        {`
          .main-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};
export default detail;
