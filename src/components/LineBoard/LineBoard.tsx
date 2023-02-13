import React, { useMemo } from "react";

import { Cell } from "components/Cell";

type LineBoardType = {
  firstClassName: string;
  secondClassName: string;
};
export const LineBoard = ({
  firstClassName,
  secondClassName,
}: LineBoardType) => {
  // const array = Array.from({ length: 8 }, (_, i) => i + 1);

  // const lineCell = useMemo(() => {
  //   return array.map((el, index) => (
  //     // <Cell
  //     //   /* eslint-disable-next-line react/no-array-index-key */
  //     //   key={index}
  //     //   className={el % 2 === 0 ? firstClassName : secondClassName}
  //     // />
  //   ));
  // }, [array, firstClassName, secondClassName]);

  return <>a</>;
};
