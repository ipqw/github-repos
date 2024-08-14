"use client";
import { FC, ReactNode } from "react";
import Header from "./components/Header";

interface IProps {
    children: ReactNode;
}

const template: FC<IProps> = ({ children }) => {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            {children}
        </div>
    );
};

export default template;
