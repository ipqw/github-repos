import { FC, useState } from "react";
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
    const [selectedRepository, setSelectedRepository] = useState<number>(0);
    return (
        <div style={{ display: isVisible ? "flex" : "none" }} className={styles.wrapper}>
            <SearchResultPages
                selectedRepository={selectedRepository}
                setSelectedRepository={setSelectedRepository}
                repositories={repositories}
            />
            <DetailedRepository
                selectedRepository={selectedRepository}
                setSelectedRepository={setSelectedRepository}
            />
        </div>
    );
};

export default SearchResults;
