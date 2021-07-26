import "../styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from "../components/Layout"
import GlobalState from "../context/globalStore";
// import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalState>
    </>
  );
}

// export default appWithTranslation(MyApp);
export default MyApp;
