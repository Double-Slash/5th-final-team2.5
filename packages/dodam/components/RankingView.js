import Image from 'next/image';

export default function RankingtView(props) {
  const dataList = props.data.map((data) => (
    <div className="col-4">
      <Image className="img-temp" src="/{data.imageUrl}" height="128px" width="96px" />
      <div className="title-temp">{data.title}</div>
    </div>
  ));
  return <div className="row">{dataList}</div>;
}
