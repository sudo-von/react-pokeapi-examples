import { FC, ReactNode } from "react";

interface ICardProps {
    children: ReactNode
}

const Card: FC<ICardProps> = ({ children }) => {
    return (
        <div className="rounded shadow-md bg-white">
            <div className="px-6 py-4">
                {children}
            </div>
        </div>
    );
};

export default Card;
