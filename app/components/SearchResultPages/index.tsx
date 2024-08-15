import { Dispatch, FC, SetStateAction } from "react";
import RepositoryList from "../RepositoryList";
import styles from "./RepositoryList.module.scss";
import { IItem } from "@/app/types";

interface IProps {
    repositories: IItem[];
    selectedRepository: number;
    setSelectedRepository: Dispatch<SetStateAction<number>>;
}

const SearchResultPages: FC<IProps> = ({
    repositories,
    selectedRepository,
    setSelectedRepository,
}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Результаты поиска</p>
            <RepositoryList
                selectedRepository={selectedRepository}
                setSelectedRepository={setSelectedRepository}
                repositories={repositories}
            />
        </div>
    );
};

export default SearchResultPages;
