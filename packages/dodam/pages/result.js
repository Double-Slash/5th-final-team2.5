import { Typography, Button } from '@dodam/components';

export default function Result() {
  const mode = 1;
  return (
    <>
      <div className="result">
        <style jsx>
          {`
            .result-top {
              background-color: #fff6d9;
              padding: 50px;
              text-align: center;

              height: 289px;
            }

            .result-image {
              background: #ffffff 0% 0% no-repeat padding-box;
              box-shadow: 0px 10px 15px #0000001c;
              opacity: 1;
              width: 152px;
              height: 152px;
              border-radius: 50%;
              margin: 20px;
            }
            .result-bottom {
              padding: 50px 10px 20px 10px;
            }

            .row {
              margin: 8px 0;
            }
            .result-line {
              height: 4px;
              background: #eeeeee 0% 0% no-repeat padding-box;
              opacity: 1;
            }
            .recommendation {
              padding: 30px 10px;
            }
            .card {
              width: 146px;
            }
            .col {
              padding: 8px;
            }
            .card-body {
              padding: 8px;
            }
            .card-text {
              font-size: 12px;
            }

            .card-img-top {
              width: 146px;
              height: 146px;
              background-color: #aaa;
              cursor: pointer;
              border-radius: 6px;
            }
          `}
        </style>
        <div className="result-top">
          <Typography className="header" align="center" variant="h5">
            김도담님은
          </Typography>
          <Typography className="header" align="center" variant="h3" weight="bolder">
            이상적인 세상을
          </Typography>
          <Typography className="header" align="center" variant="h3" weight="bolder">
            만들어가시는군요!
          </Typography>
          <img className="result-image" />
        </div>
        <div className="result-bottom">
          <Typography weight="bolder">분석 결과</Typography>
          <Typography>
            상세 분석 결과입니다 상세분석 결과입니다. 상세 분석 결과입니다 상세분석 결과입니다. 상세분석 결과입니다
            상세분석 결과입니다. 분석 결과입니다. 상세 분석 결과입니다 상세분석 결과입니다. 상세 분석 결과입니다
            상세분석 결과입니다. 상세분석 결과입니다 상세분석 결과입니다. 분석 결과입니다. 상세 분석 결과입니다 상세분석
            결과입니다. 상세분석 결과입니다 상세분석 결과입니다. 분석 결과입니다.
          </Typography>
          <div className="row">
            <Button id="btn-1" outline fullWidth variant="secondary">
              결과 공유
            </Button>
          </div>
          {mode === 2 && (
            <div className="row">
              <Button id="btn-2" variant="secondary" fullWidth>
                동아리 등록 완료
              </Button>
            </div>
          )}
        </div>
      </div>
      {mode === 1 && (
        <>
          <div className="result-line"></div>
          <div className="recommendation">
            <Typography className="header" align="center" variant="h5" weight="bolder">
              이 동아리를 추천드려요!
            </Typography>

            <div className="row">
              <div className="col">
                <div className="card border-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">수원 연합 창작 동아리 '그 노래' 회원모집</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">수원 연합 창작 동아리 '그 노래' 회원모집</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">수원 연합 창작 동아리 '그 노래' 회원모집</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">수원 연합 창작 동아리 '그 노래' 회원모집</p>
                  </div>
                </div>
              </div>
            </div>

            <Button fullWidth>더보기</Button>
          </div>
        </>
      )}
    </>
  );
}
