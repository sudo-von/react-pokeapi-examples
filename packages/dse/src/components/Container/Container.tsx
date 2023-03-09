import { FC, ReactNode } from "react";

const justifyContentVariant = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignItemsVariant = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};

interface IContainerProps {
  children: ReactNode;
  justifyContent?: keyof typeof justifyContentVariant;
  alignItems?: keyof typeof alignItemsVariant;
}

const Container: FC<IContainerProps> = ({
  children,
  justifyContent = "start",
  alignItems = "start",
}) => {
  const className = `flex ${justifyContentVariant[justifyContent]} ${alignItemsVariant[alignItems]}`;
  console.log("🚀 ~ file: Container.tsx:33 ~ className:", className);
  return <div className={className}>{children}</div>;
};

export default Container;
