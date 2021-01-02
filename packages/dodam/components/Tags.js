import { Badge } from '@dodam/components';

const Tags = () => {
  return (
    <div className="tags">
      <Badge className="tag-item">봉사</Badge>
      <Badge className="tag-item">서울</Badge>
      <Badge className="tag-item">10~30명</Badge>
      <style jsx>{`
        .tags {
          display: flex;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        :global(.tag-item) {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default Tags;
