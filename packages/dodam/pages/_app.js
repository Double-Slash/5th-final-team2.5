import '../styles/bootstrap.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigation } from '@dodam/components';
import Head from 'next/head';

const Dodam = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>도담도담</title>
    </Head>

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
          background-color: #00000008;
        }
      `}
    </style>
  </>
);

export default Dodam;
