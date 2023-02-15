import React, { Dispatch, SetStateAction, useEffect } from "react";

import "./board.scss";

import { Cell } from "components/Cell";
import { SrcBlackFigures, SrcWhiteFigures } from "enums";
import { DataActiveFigureType, Nullable } from "types";
import { getFigure } from "utils";

type BoardType = {
  // eslint-disable-next-line no-undef
  board: JSX.Element[];
  // eslint-disable-next-line no-undef
  setBoard: Dispatch<SetStateAction<JSX.Element[]>>;
  dataActiveFigure: Nullable<DataActiveFigureType>;
  isSlotAvailable: (
    data: Nullable<DataActiveFigureType>,
    x: number,
    y: number
  ) => boolean;
  handleFigureClick: (data: DataActiveFigureType) => void;
  handleSlotAvailableClick: (x: number, y: number) => void;
};

export const Board = ({
  board,
  setBoard,
  dataActiveFigure,
  isSlotAvailable,
  handleFigureClick,
  handleSlotAvailableClick,
}: BoardType) => {
  useEffect(() => {
    getBoard();
  }, []);

  const getBoard = () => {
    const arr = [];

    const isCorrespondsCoordinates = (x: number, y: number) => {
      if (x === dataActiveFigure?.x && y === dataActiveFigure?.y) {
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
        const id = Math.random();

        arr.push(
          <Cell
            key={id}
            id={id}
            className={j % 2 === 0 ? firstClassName : secondClassName}
            x={i}
            y={j}
            isMoveSlotAvailable={isSlotAvailable(dataActiveFigure, i, j)}
            dataFigure={getFigure(i, j, srcFigures)}
            onFigureClick={handleFigureClick}
            onSlotAvailableClick={handleSlotAvailableClick}
            activeCell={isCorrespondsCoordinates(i, j) && "activeCell"}
          />
        );
      }
    }

    setBoard(arr);
  };

  // @ts-ignore
  return <div className="board-container">{board}</div>;
};
