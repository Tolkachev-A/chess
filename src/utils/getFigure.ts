import { ColorFiguresType, DataFigureType, Nullable } from "types";

export const getFigure = (
  x: number,
  y: number,
  srcFigures: ColorFiguresType
): Nullable<DataFigureType> => {
  if (x === 0 || x === 7) {
    if (y === 0 || y === 7) return { src: srcFigures.rook, figure: "rook" };
    if (y === 1 || y === 6) return { src: srcFigures.knight, figure: "knight" };
    if (y === 2 || y === 5) return { src: srcFigures.bishop, figure: "bishop" };
    if (y === 3) return { src: srcFigures.king, figure: "king" };
    if (y === 4) return { src: srcFigures.queen, figure: "queen" };
  }
  if (x === 1 || x === 6) return { src: srcFigures.pawn, figure: "pawn" };

  return null;
};
