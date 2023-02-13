import React from "react";

type CellBoardType = {
  className: string;
  x: number;
  y: number;
  figure: any;
};

export const Cell = ({ className, x, y, figure }: CellBoardType) => {
  console.log(x, y);

  return (
    <div className={`cell ${className}`}>
      {figure && <img className="img" src={figure} alt="figure" />}
    </div>
  );
};
