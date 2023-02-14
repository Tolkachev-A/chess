import React, { useMemo, useState } from "react";

import "./board.scss";

import { Cell } from "components/Cell";
import { SrcBlackFigures, SrcWhiteFigures } from "enums";
import { FiguresType, Nullable } from "types";
import { getFigure } from "utils";

export type DataActiveFigureType = {
  figure: Nullable<FiguresType>;
  x: Nullable<number>;
  y: Nullable<number>;
};

export const Board = () => {
  const [dataActiveFigure, setDataActiveFigure] =
    useState<DataActiveFigureType>({
      figure: null,
      x: null,
      y: null,
    });

  console.log(dataActiveFigure);
  const cell = useMemo(() => {
    const cells = [];

    const isCorrespondsCoordinates = (x: number, y: number) => {
      if (x === dataActiveFigure.x && y === dataActiveFigure.y) {
        return true;
      }
    };

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 8; i++) {
      const firstClassName = i % 2 === 0 ? "cellWhite" : "cellBlack";
      const secondClassName = i % 2 === 0 ? "cellBlack" : "cellWhite";

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < 8; j++) {
        const srcFigures =
          i === 0 || i === 1 ? SrcWhiteFigures : SrcBlackFigures;

        cells.push(
          <Cell
            key={Math.random()}
            className={j % 2 === 0 ? firstClassName : secondClassName}
            x={i}
            y={j}
            dataFigure={getFigure(i, j, srcFigures)}
            onClickFigure={setDataActiveFigure}
            activeCell={isCorrespondsCoordinates(i, j) && "activeCell"}
          />
        );
      }
    }

    return cells;
  }, [dataActiveFigure.x, dataActiveFigure.y]);

  return <div className="board-container">{cell}</div>;
};
