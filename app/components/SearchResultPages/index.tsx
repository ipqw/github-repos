import { FC } from "react";
import RepositoryList from "../RepositoryList";
import styles from "./RepositoryList.module.scss";
import { IItem } from "@/app/types";

interface IProps {
    repositories: IItem[];
}

const SearchResultPages: FC<IProps> = ({ repositories }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Результаты поиска</p>
            <RepositoryList repositories={repositories} />
        </div>
    );
};

export default SearchResultPages;
