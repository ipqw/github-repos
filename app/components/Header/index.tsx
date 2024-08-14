"use server";
import React, { FC } from "react";
import styles from "./Header.module.scss";
import StyledButton from "../StyledButton";

const Header: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentBlock}>
                <input
                    placeholder="Введите поисковый запрос"
                    type="text"
                    className={styles.input}
                />
                <StyledButton />
            </div>
        </div>
    );
};

export default Header;
