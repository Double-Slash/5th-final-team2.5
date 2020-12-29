import { Badge } from '@dodam/components';

const Tags = () => {
  return (
    <div className="tags">
      <div className="tag-item">
        <Badge>봉사</Badge>
      </div>
      <div className="tag-item">
        <Badge>서울</Badge>
      </div>
      <div className="tag-item">
        <Badge>10~30명</Badge>
      </div>
      <style jsx global>{`
        .tags {
          display: flex;
          margin-top: 22px;
          margin-bottom: 25px;
        }
        .tag-item {
          margin-right: 6px;
        }
      `}</style>
    </div>
  );
};

export default Tags;
