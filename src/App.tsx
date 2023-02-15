import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Board } from "./components/Board";

import { CoordinatesCellType, DataActiveFigureType, Nullable } from "types";

const App = () => {
  const [dataActiveFigure, setDataActiveFigure] =
    useState<Nullable<DataActiveFigureType>>(null);
  const [nextCell, setNextCell] = useState<Nullable<CoordinatesCellType>>(null);
  // eslint-disable-next-line no-undef
  const [board, setBoard] = useState<JSX.Element[]>([]);

  const handleFigureClick = useCallback((data: DataActiveFigureType) => {
    setDataActiveFigure(data);
  }, []);

  const handleSlotAvailableClick = useCallback((x: number, y: number) => {
    setNextCell({ x, y });
  }, []);

  const isSlotAvailable = (
    data: Nullable<DataActiveFigureType>,
    x: number,
    y: number
  ) => {
    if (data?.figure === "pawn") {
      if (y === data.y && x + 1 === data.x) {
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    if (dataActiveFigure) {
      setBoard(
        board.map((cell) => {
          return {
            ...cell,
            props: {
              ...cell.props,
              isMoveSlotAvailable: isSlotAvailable(
                dataActiveFigure,
                cell.props?.x,
                cell.props?.y
              ),
            },
          };
        })
      );
    }
  }, [dataActiveFigure]);

  useEffect(() => {
    if (nextCell) {
      setBoard(
        board.map((cell) => {
          const dataCell = cell.props;

          if (
            dataCell.x === dataActiveFigure?.x &&
            dataCell.y === dataActiveFigure?.y
          ) {
            console.log(cell);

            return { ...cell, props: { ...cell.props, dataFigure: null } };
          }

          if (
            dataCell.x === nextCell?.x &&
            dataCell.y === nextCell?.y &&
            dataActiveFigure
          ) {
            return {
              ...cell,
              props: {
                ...cell.props,
                dataFigure: {
                  figure: dataActiveFigure.figure,
                  src: dataActiveFigure.src,
                },
              },
            };
          }

          return cell;
        })
      );
    }
    setNextCell(null);
    setDataActiveFigure(null);
  }, [nextCell]);

  return (
    <div className="App">
      <header className="App-header"> </header>
      <main>
        <Board
          board={board}
          setBoard={setBoard}
          handleFigureClick={handleFigureClick}
          handleSlotAvailableClick={handleSlotAvailableClick}
          dataActiveFigure={dataActiveFigure}
          isSlotAvailable={isSlotAvailable}
        />
      </main>
    </div>
  );
};

export default App;
