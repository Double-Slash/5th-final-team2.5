import Image from 'next/image';

export default function GridtView(props) {
  const dataList = props.data.map((data) => (
    <div className="col-6">
      <Image className="img-temp" src="/{data.imageUrl}" height="152px" width="152px" />
      <div className="title-temp">{data.title}</div>
    </div>
  ));
  return <div className="row">{dataList}</div>;
}
