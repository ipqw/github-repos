"use client";
import { FC } from "react";
import styles from "./page.module.scss";
import { useAppSelector } from "./store/hooks";
import { repositoryApiSlice } from "@/app/store/services/repositoryApiSlice";
import SearchResults from "./components/SearchResults";

const Home: FC = () => {
    const { query, sort, order, per_page, page } = useAppSelector((state) => state.query);
    const { data } = repositoryApiSlice.useGetRepositoriesQuery(
        { query, sort, order, per_page, page },
        { skip: query ? false : true },
    );
    return (
        <div className={styles.main}>
            <p style={{ display: data ? "none" : "block" }} className={styles.welcomeText}>
                Добро пожаловать
            </p>
            <SearchResults repositories={data?.items || []} isVisible={data ? true : false} />
        </div>
    );
};

export default Home;
