import { useContext } from "react";
import { Context } from "../../../context/globalStore";
import BoxInfo from "../../utils/box-info";

const UserInfo = () => {
  const {state} = useContext(Context);
  const {launcher_info} = state;

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
          <span className="font-gibson-semiBold">Información global del Farmer</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-7">
          <BoxInfo
            description="Espacio estimado"
            value={launcher_info.space}
          />

          <BoxInfo
            description="Total de Chias Pagadas"
            value={launcher_info.chias_pagadas}
          />

          <BoxInfo
            description="Dificultad"
            value={launcher_info.difficulty}
          />

          <BoxInfo
            description="Puntos Actuales"
            value={launcher_info.points}
          />

          <BoxInfo
            description="Bloques Encontrados"
            value={launcher_info.blocks.length}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
