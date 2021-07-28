import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Context } from '../../../context/globalStore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from './navbar';


export const AppBar = () => {
  const router = useRouter()
  const {state} = useContext(Context);
  const [values, setValues] = useState({
    launcherId: '',
  });

  function handleInputChange(e) {
    e.target.value = e.target.value.replace(/[^0-9a-zA-Z]+/,"");
    setValues(() => ({
      launcherId: e.target.value,
    }));
  }

  function _handleKeyDown(e)  {
    if (e.key === 'Enter') {
      redirectToLauncher()
    }
  }
  let redirectToLauncher = () =>  {
    router.push(`/launcher-id/${values.launcherId}`)
    setValues(() => ({
      launcherId: '',
    }));
  }

  return (
    <div className={`${!state.BusinessModalIsOpen && !state.VideoModalIsOpen && 'sticky'} top-0 py-2 bg-white z-10`}>
      <div className="mx-auto container grid grid-cols-8 lg:grid-cols-12 gap-4 relative my-2">
        <div className="flex place-items-center col-span-3 md:col-span-2 cursor-pointer">
          <Link href="/" passHref><div className="flex"><img alt="BioPool Logo" src="/images/BioPool-logo.svg"/></div></Link>
        </div>
        <NavBar />
        <div className="relative col-end-9 lg:col-end-13 col-span-3">
          <input type="text" 
            name="launcherId"
            placeholder="Launcher ID"
            autoComplete="off"
            spellCheck="false"
            value={values.launcherId}
            onChange={handleInputChange}
            onKeyDown={_handleKeyDown}
            maxLength={70}
            className="
              h-full
              pl-2
              pr-10
              py-1
              w-full 
              rounded
              border 
              border-green1 
              focus:outline-none 
              font-gibson-light 
              text-green1 
              text-sm
            "
          />
          <button type="submit" className="absolute right-0 top-0 h-full mr-4 text-base focus:outline-none" onClick={redirectToLauncher}>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-lime1 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
