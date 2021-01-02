import Tags from '../components/Tags';
import { Typography } from '@dodam/components';

const GroupInfo = ({ name }) => {
  return (
    <div className="group-info">
      <div className="row">
        <div className="col-2">
          <div className="group-profile" />
        </div>
        <div className="col-8">
          <Typography weight="bold" variant="h5" className="group-name">
            {name}
          </Typography>
        </div>
        <div align="right" className="col-2">
          <div className="icon" />
        </div>
      </div>
      <Tags />
      <style jsx>{`
        .group-info {
          margin: 16px 8px 0px;
        }
        .group-profile {
          width: 40px;
          height: 40px;
          border-radius: 75px;
          background-color: #d9d9d9;
        }
        :global(.group-name) {
          margin-top: 8px;
        }
        .icon {
          margin-top: 8px;
          width: 22px;
          height: 22px;
          border-radius: 75px;
          background-color: #d9d9d9;
        }
      `}</style>
    </div>
  );
};

export default GroupInfo;
