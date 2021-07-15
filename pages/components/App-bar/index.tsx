export const AppBar = () => {

  return (
    <div className="sticky top-0 py-2 bg-white z-10">
      <div className="mx-auto container grid grid-cols-12 gap-4 relative my-2">
        <div className="flex place-items-center mr-1 col-span-2">
          <img alt="BioPool Logo" src="images/BioPool-logo.webp" /> 
        </div>

        <div className="col-span-2 col-end-12 flex items-center">
          <input 
            type="text" id="Business" name="empresa"
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
              w-full 
              text-lime1 
              rounded
              text-xs
              font-gibson-light
              border 
              border-lime1 
              hover:text-white 
              hover:bg-lime1 
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
