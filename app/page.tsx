"use client";
import { FC, useEffect } from "react";
import styles from "./page.module.scss";
import SearchResults from "./components/SearchResults";
import { useAppSelector } from "./store/hooks";
import { repositoryApiSlice } from "@/app/store/services/repositoryApiSlice";

const Home: FC = () => {
    const { query } = useAppSelector((state) => state.query);
    const { data } = repositoryApiSlice.useGetRepositoriesQuery({ query });
    return (
        <main className={styles.main}>
            <p style={{ display: data ? "none" : "block" }} className={styles.welcomeText}>
                Добро пожаловать
            </p>
        </main>
    );
};

export default Home;
