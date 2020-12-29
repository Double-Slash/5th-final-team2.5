const PosterImage = () => {
  return (
    <>
      <div className="poster" />
      <style jsx>{`
        .poster {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          height: 280px;
          background: #d9d9d9;
        }
      `}</style>
    </>
  );
};
export default PosterImage;
