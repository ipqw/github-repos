import { FC } from "react";
import DetailedRepository from "../DetailedRepository";
import RepositoryList from "../SearchResultPages";
import styles from "./SearchResults.module.scss";
import SearchResultPages from "../SearchResultPages";
import { IItem } from "@/app/types";

interface IProps {
    isVisible: boolean;
    repositories: IItem[];
}

const SearchResults: FC<IProps> = ({ isVisible, repositories }) => {
    return (
        <div style={{ display: isVisible ? "flex" : "none" }} className={styles.wrapper}>
            <SearchResultPages repositories={repositories} />
            <DetailedRepository />
        </div>
    );
};

export default SearchResults;
