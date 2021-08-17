import Head from "next/head";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import Router from "next/router";
import "../styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import GlobalState from "../context/globalStore";
import { appWithTranslation } from 'next-i18next'

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon/chiatkIcon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" 
          content="Somos una plataforma que proporciona a todo aquel que desee iniciarse en el 
            ecosistema de la criptomoneda Chía un conjunto de herramientas que le permitirán entender, 
            administrar y realizar diversas actividades  como el monitoreo de la red, la participación 
            en un pool de farming de plots y la posibilidad de administrar su wallet. ¡Todo en un mismo l
            ugar!"
        />  
        <meta name="keywords" content="chianetwork pool chia toolkit chiatk chia toolkit farming farmear chiacoin xch criptomoneda mining mineria biopool"/>
        <title>BioPool</title>
      </Head>
      <GlobalState>
        <Component {...pageProps} />
      </GlobalState>
    </>
  );
}

export default appWithTranslation(MyApp);
// export default MyApp;
