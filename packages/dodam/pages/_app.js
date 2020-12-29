import '../styles/bootstrap.scss';
import 'react-datepicker/dist/react-datepicker.css';
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
          padding: 50px 0px 0px 0px;
        }
      `}
    </style>
    <style jsx global>
      {`
        body {
          width: 100vw;
        }
        :root {
          /* Colors: */
          --unnamed-color-ebba00: #ebba00;
          --unnamed-color-191919: #191919;

          /* Font/text values */
          --unnamed-font-family-noto-sans-cjk-kr: Noto Sans CJK KR;
          --unnamed-font-style-normal: normal;
          --unnamed-font-weight-normal: normal;
          --unnamed-font-size-40: 40px;
          --unnamed-character-spacing-0: 0px;
          --unnamed-line-spacing-59: 59px;
        }

        /* Character Styles */
        .unnamed-character-style-1 {
          font-family: var(--unnamed-font-family-noto-sans-cjk-kr);
          font-style: var(--unnamed-font-style-normal);
          font-weight: var(--unnamed-font-weight-normal);
          font-size: var(--unnamed-font-size-40);
          line-height: var(--unnamed-line-spacing-59);
          letter-spacing: var(--unnamed-character-spacing-0);
          color: var(--unnamed-color-8c8c8c);
        }
      `}
    </style>
  </>
);

export default Dodam;
