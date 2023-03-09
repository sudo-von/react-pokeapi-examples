import { FC, ReactNode } from "react";

const colsVariant = {
  0: "grid-cols-none",
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
};

interface IGridCols {
  children?: ReactNode;
  cols?: keyof typeof colsVariant;
}

const Grid: FC<IGridCols> = ({ children, cols = 0 }) => {
  const className = `grid ${colsVariant[cols]}`;
  return <div className={className}>{children}</div>;
};

export default Grid;
