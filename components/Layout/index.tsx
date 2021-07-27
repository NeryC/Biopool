import AppBar from "./App-bar";
import Footer from "./Footer";

const Layout = ({children}) =>{
  return (
    <div className="bg-white text-white font-gibson2 text-xl">
      <AppBar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout;