import '../styles/bootstrap.scss';
import { Navigation } from '@dodam/components';

const Dodam = ({ Component, pageProps }) => (
  <>
    <Navigation title="도담도담" />
    <div className="dodam-root">
      <Component {...pageProps} />
    </div>

    <style jsx>
      {`
        .dodam-root {
          padding: 58px 8px 8px 8px;
        }
      `}
    </style>
  </>
);

export default Dodam;
