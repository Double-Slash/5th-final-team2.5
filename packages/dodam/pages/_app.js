import '../styles/bootstrap.scss';
import { Fragment } from 'react';
import { Navigation } from '@dodam/components';

function Dodam({ Component, pageProps }) {
  console.log(Component);
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Dodam;
