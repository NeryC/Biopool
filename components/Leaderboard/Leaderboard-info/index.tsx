import { useContext } from "react";
import { Context } from "../../../context/globalStore";
import BoxInfo from "../../utils/box-info";

const LeaderboardInfo = () => {
  const {state} = useContext(Context);
  

  return (
    <div className="pt-10 md:pt-20 pb-5"
    >
      <div className="
        container 
        mx-auto 
        text-green3
        "
      >
        <div className="text-4xl md:text-4.5xl lg:text-3.5xl">
          <span className="font-gibson-semiBold">Leaderboard</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-7">
          <BoxInfo
            description="Espacio Global (Netspace)"
            value={state.net_space}
          />

          <BoxInfo
            description="Espacio del Pool"
            value={state.poolSize}
          />

          <BoxInfo
            description="Puntos Globales"
            value={state.poolPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardInfo;
