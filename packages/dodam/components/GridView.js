// const GridtView = {
//     {
//         "key": "1",
//         "name": "Club",
//         // "imageUrl" : ""
//     },
//     {
//         "key": "2",
//         "name": "Club",
//         // "imageUrl" : ""
//     },
//     {
//         "key": "3",
//         "name": "Club",
//         // "imageUrl" : ""
//     },
//     {
//         "key": "4",
//         "name": "Club",
//         // "imageUrl" : ""
//     },
// };

export default function GridtView(props) {
  const dataList = props.data.map((data, i) => (
    <div className="col-6">
      <img className="img-temp" src={data.imageUrl} />
      <div className="title-temp">{data.title}</div>
    </div>
  ));
  return <div className="row">{dataList}</div>;
}
