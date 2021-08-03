import { useContext, useState } from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from '../../../context/globalStore';
import { useRouter } from 'next/router';
import NavBar from './navbar';


export const AppBar = () => {
  const { t } = useTranslation('app-bar');
  const router = useRouter()
  const {state} = useContext(Context);
  const [values, setValues] = useState({
    launcherId: '',
    isMenuOpen: false,
    isLocalesOpen: false
  });

  function handleInputChange(e) {
    e.target.value = e.target.value.replace(/[^0-9a-zA-Z]+/,"");
    setValues((state) => ({
      ...state,
      launcherId: e.target.value,
    }));
  }

  function _handleKeyDown(e)  {
    if (e.key === 'Enter') {
      redirectToLauncher()
    }
  }

  const redirectToLauncher = () =>  {
    router.push(`/launcher-id/${values.launcherId}`)
    setValues((state) => ({
      ...state,
      launcherId: '',
      isMenuOpen: false,
      isLocalesOpen: false
    }));
  }

  const redirectToHome = () =>  {
    router.push(`/`)
    setValues((state) => ({
      ...state,
      launcherId: '',
      isMenuOpen: false,
      isLocalesOpen: false
    }));
  }

  const redirectToLeaderboard = () =>  {
    router.push(`/Leaderboard`)
    setValues((state) => ({
      ...state,
      launcherId: '',
      isMenuOpen: false,
      isLocalesOpen: false
    }));
  }

  const openMenu = () =>  {
    setValues((state) => ({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    }));
  }

  const openLocales = () =>  {
    setValues((state) => ({
      ...state,
      isLocalesOpen: !state.isLocalesOpen,
    }));
  }

  return (
    <div className={`${!state.BusinessModalIsOpen && !state.VideoModalIsOpen && 'sticky'} top-0 py-2 bg-white z-10`}>
      <div className="mx-auto container grid grid-cols-8 lg:grid-cols-12 gap-4 relative my-2">
        <div className="flex place-items-center col-span-3 md:col-span-2 cursor-pointer">
          <div className="flex" onClick={redirectToHome}><img alt="BioPool Logo" src="/images/BioPool-logo.svg"/></div>
        </div>
        <NavBar />

        <div className="col-end-8 lg:col-end-10 flex text-black place-items-center justify-end">
          <div className="relative w-full">
            <button onClick={openLocales} className="flex justify-center w-full focus:outline-none focus:shadow-outline">
              <img alt="usa flag" className="w-10" src={`/images/flags/${router.locale}.png`} />
            </button>
            <div className="absolute flex justify-center w-full mt-2 ">
              <div className={`px-0 md:px-2 bg-white rounded-md ${values.isLocalesOpen ? 'visible' : 'invisible'}`}>
                {
                  router && router.locales && router.locales.map(function (locale, index) {
                    if(locale !== router.locale)
                      return <Link key={index} href={router.pathname} locale={locale} passHref><div className="block rounded-lg focus:outline-none focus:shadow-outline cursor-pointer"><img alt="flag" className="w-10" src={`/images/flags/${locale}.png`} /></div></Link>
                    return null
                  })
                }
              </div>
            </div>
          </div>    
        </div>

        <div className="relative col-end-9 lg:col-end-13 col-span-3 hidden lg:flex">
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
        <div className="col-end-9 flex text-2xl lg:hidden place-items-center justify-end" onClick={openMenu}>
          <FontAwesomeIcon
            icon={values.isMenuOpen ? faTimes : faBars }
            className="text-lime1"
          />
        </div>
      </div>
      <div className={`text-black mx-auto container text-xl flex ${!values.isMenuOpen && 'hidden'} lg:hidden grid grid-col mt-5`}>
				<ul>
					<li className="block p-4 font-gibson2 text-black hover:text-lime1">
            <div className="relative h-10">
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
                  text-lg
                "
              />
              <button type="submit" className="absolute right-0 top-0 h-10 mr-4 md:mr-8 text-base focus:outline-none" onClick={redirectToLauncher}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-lime1 "
                />
              </button>
            </div>
					</li>
					<li className="block p-4 font-gibson2 text-black hover:text-lime1" onClick={redirectToHome}>
            {t('home')}
					</li>
					<li className="block p-4 font-gibson2 text-black hover:text-lime1" onClick={redirectToLeaderboard}>
            {t('leaderboard')}
					</li>
				</ul>
			</div>
    
    </div>
  );
};

export default AppBar;
