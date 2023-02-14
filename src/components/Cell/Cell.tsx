import React, { Dispatch, SetStateAction } from "react";

import { DataActiveFigureType } from "components/Board/Board";
import { FiguresType, Nullable } from "types";

type CellBoardType = {
  className: string;
  x: number;
  y: number;
  dataFigure: { src: Nullable<string>; figure: Nullable<FiguresType> };
  onClickFigure: Dispatch<SetStateAction<DataActiveFigureType>>;
  activeCell?: string;
};

export const Cell = ({
  className,
  x,
  y,
  dataFigure,
  onClickFigure,
  activeCell,
}: CellBoardType) => {
  const handleClickFigure = () => {
    if (dataFigure.src) {
      onClickFigure({ figure: dataFigure.figure, x, y });
    }
  };

  return (
    <div
      className={`cell ${className} ${activeCell}`}
      onClick={handleClickFigure}
    >
      {dataFigure.src && (
        <img className="img" src={dataFigure.src} alt="figure" />
      )}
    </div>
  );
};
