import React, { useContext, useEffect, useState } from "react";
import { Context } from '../context/globalStore';

export const AppBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {state} = useContext(Context);

  const handleScroll=()=>{
    if (window.pageYOffset > 0) {
      setScrolled(true)
    }else{
      setScrolled(false)
    }
   
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className={`sticky top-0 z-10 py-2 align-middle bg-white`}>
      <div className="mx-auto container grid grid-cols-12 gap-4 relative my-2">
        <div className="flex place-items-center mr-1 col-span-2">
          <img src="images/BioPool-logo.webp" />
        </div>

        <div className="col-span-2 col-end-12 flex items-center">
          <input 
            type="text" id="Business"  name="empresa" onChange={()=>{}}
            className="
              px-2
              py-1
              w-full 
              rounded
              border 
              border-green1 
              focus:outline-none 
              font-gibson-light 
              text-green1 
              text-xs
            "
            placeholder="Launcher ID or Alias"
            autoComplete="off" required maxLength={40}
          />
        </div>

        <div className="col-end-13 flex items-center">
          <button 
            className={`
              py-1
              border 
              text-lime1 
              border-lime1 
              hover:text-white 
              hover:bg-lime1 
              bg-transparent  
              hover:text-white 
              w-full 
              hover:border-transparent 
              rounded
              text-xs
              font-gibson-light
            `}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
