import '../styles/bootstrap.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigation } from '@dodam/components';

const Dodam = ({ Component, pageProps }) => (
  <>
    <Navigation title="도담도담" />
    <div className="dodam-root">
      <Component {...pageProps} />
    </div>

    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          font-family: 'Noto Sans KR', sans-serif;
        }
        .dodam-root {
          padding: 58px 8px 8px 8px;
          min-height: 100vh;
        }
      `}
    </style>
  </>
);

export default Dodam;
