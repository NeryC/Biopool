import { useContext } from "react";
import { Context } from "../../../context/globalStore";
import BlocksTable from "./blocks-table";
import PartialsTable from "./partials-table";
import PaymentTable from "./payments-table";

const LauncherTables = () => {
  const {state} = useContext(Context);
  const {launcher_info} = state;

  let tabsContainer = (typeof window !== 'undefined') ? document.querySelector("#tabs") : null

  if (tabsContainer){

  
    let tabTogglers = tabsContainer.querySelectorAll("a");
    console.log(tabTogglers);

    tabTogglers.forEach(function(toggler) {
      toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");
        if(tabContents){
          for (let i = 0; i < tabContents.children.length; i++) {

            tabTogglers[i].parentElement.classList.remove("border-blue-400", "border-b-4", "border-b-2",  "-mb-px", "opacity-100");  tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
              continue;
            }
            tabContents.children[i].classList.add("hidden");

          }
          e.target.parentElement.classList.add("border-blue-400", "border-b-4", "-mb-px", "opacity-100");
        }
      });
    });
    let defaultTab = document.getElementById("default-tab");

    defaultTab && defaultTab.click();

  }
  return (
    <div className="
      container 
      mx-auto 
      text-green3
      py-5
      md:py-10
    ">
      <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
        <li className="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50"><a id="default-tab" href="#first">Pagos</a></li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#second">Bloques</a></li>
        <li className="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#third">Parciales</a></li>
      </ul>

      <div id="tab-contents">
        <div id="first" className="py-4">
          <PaymentTable table={launcher_info.payments} />
        </div>
        <div id="second" className="hidden py-4">
          <BlocksTable table={launcher_info.blocks} />
        </div>
        <div id="third" className="hidden py-4">
          <PartialsTable table={launcher_info.partials} />
        </div>
      </div>
    </div>
  );
};

export default LauncherTables;
