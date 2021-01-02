import GroupInfo from '../components/GroupInfo';
import RecruitInfo from '../components/RecruitInfo';
import PosterImage from '../components/PosterImage';

const detail = () => {
  return (
    <div className="main-container">
      <GroupInfo name="더블슬래쉬" />
      <PosterImage />
      <RecruitInfo />
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
