import Head from "next/head";
import AppBar from "./App-bar";
import Footer from "./Footer";

const Layout = ({children}) =>{
  return (
    <div className="bg-white text-white font-gibson2 text-xl">
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
      <AppBar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout;