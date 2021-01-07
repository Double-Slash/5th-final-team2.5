import { Typography, Badge } from '@dodam/components';

const GroupInfo = ({ name, tags }) => {
  const showTags = () =>
    tags.map((element, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Badge key={idx} className="tag-item">
        {element.tag}
      </Badge>
    ));
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
      <div className="tags">{showTags()}</div>
      <style jsx>
        {`
          .group-info {
            margin: 16px 8px 0px;
          }
          .group-profile {
            width: 40px;
            height: 40px;
            border-radius: 75px;
            background-color: #d9d9d9;
          }
          .group-info :global(.group-name) {
            margin-top: 8px;
          }
          .icon {
            margin-top: 8px;
            width: 22px;
            height: 22px;
            border-radius: 75px;
            background-color: #d9d9d9;
          }
          .tags {
            display: flex;
            margin-top: 24px;
            margin-bottom: 24px;
          }
          :global(.tag-item) {
            margin-right: 8px;
          }
        `}
      </style>
    </div>
  );
};
export default GroupInfo;
