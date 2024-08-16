"use client";
import { FC, ReactNode } from "react";
import Header from "./components/Header";

interface IProps {
    children: ReactNode;
}

const template: FC<IProps> = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
            }}>
            <Header />
            {children}
        </div>
    );
};

export default template;
