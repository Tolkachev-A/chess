import React, { useMemo } from "react";

import "./board.scss";

import { Cell } from "components/Cell";
import { BlackFigures, WhiteFigures } from "enums";
import { ColorFiguresType } from "types";

export const Board = () => {
  const array = Array.from({ length: 8 }, (_, i) => i + 1);

  const cell = useMemo(() => {
    const cells = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 8; i++) {
      const firstClassName = i % 2 === 0 ? "cellWhite" : "cellBlack";
      const secondClassName = i % 2 === 0 ? "cellBlack" : "cellWhite";

      const getFigure = (
        x: number,
        y: number,
        colorFigures: ColorFiguresType
      ) => {
        if (x === 0 || x === 7) {
          if (y === 0 || y === 7) return colorFigures.rook;
          if (y === 1 || y === 6) return colorFigures.knight;
          if (y === 2 || y === 5) return colorFigures.bishop;
          if (y === 3) return colorFigures.king;
          if (y === 4) return colorFigures.queen;
        }
        if (x === 1 || x === 6) return colorFigures.pawn;
      };

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < 8; j++) {
        const colorFigures = i === 0 || i === 1 ? WhiteFigures : BlackFigures;

        cells.push(
          <Cell
            key={i + j}
            className={j % 2 === 0 ? firstClassName : secondClassName}
            x={i}
            y={j}
            figure={getFigure(i, j, colorFigures)}
          />
        );
      }
    }

    return cells;
  }, [array]);

  return <div className="board-container">{cell}</div>;
};
