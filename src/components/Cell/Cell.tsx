import React, { useMemo } from "react";

import { DataActiveFigureType, DataFigureType, Nullable } from "types";

type CellBoardType = {
  id: number;
  className: string;
  x: number;
  y: number;
  isMoveSlotAvailable: boolean;
  dataFigure: Nullable<DataFigureType>;
  onFigureClick: (data: DataActiveFigureType) => void;
  onSlotAvailableClick: (x: number, y: number) => void;
  activeCell?: string;
};

export const Cell = ({
  id,
  className,
  x,
  y,
  isMoveSlotAvailable,
  dataFigure,
  onFigureClick,
  onSlotAvailableClick,
  activeCell,
}: CellBoardType) => {
  const onCellClick = () => {
    if (dataFigure) {
      onFigureClick({ figure: dataFigure.figure, x, y, src: dataFigure.src });
    } else if (isMoveSlotAvailable) {
      onSlotAvailableClick(x, y);
    }
  };

  const availableSlot = useMemo(() => {
    return dataFigure?.src
      ? null
      : isMoveSlotAvailable && <div className="slot-available" />;
  }, [dataFigure?.src, isMoveSlotAvailable]);

  return (
    <div className={`cell ${className} ${activeCell}`} onClick={onCellClick}>
      {availableSlot}
      {dataFigure && <img className="img" src={dataFigure.src} alt="figure" />}
    </div>
  );
};
