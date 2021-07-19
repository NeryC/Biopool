import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AppBar = () => {

  return (
    <div className="sticky top-0 py-2 bg-white z-10">
      <div className="mx-auto container grid grid-cols-8 lg:grid-cols-12 gap-4 relative my-2">
        <div className="flex place-items-center mr-1 col-span-2">
          <img alt="BioPool Logo" src="images/BioPool-logo.webp" /> 
        </div>
        <div className="relative col-end-9 lg:col-end-13 col-span-2">
          <input type="search" 
            name="serch"
            placeholder="Launcher ID or Alias"
            autoComplete="off"
            className="
              h-full
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
            "/>
          <button type="submit" className="absolute right-0 top-0 mt-1 mr-4 text-xxs">
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
