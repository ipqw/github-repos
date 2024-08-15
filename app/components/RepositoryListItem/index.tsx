import { IItem } from "@/app/types";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./RepositoryListItem.module.scss";
interface IProps {
    repository: IItem;
    selectedRepository: number;
    setSelectedRepository: Dispatch<SetStateAction<number>>;
}

const RepositoryListItem: FC<IProps> = ({
    repository,
    selectedRepository,
    setSelectedRepository,
}) => {
    return (
        <div
            style={{
                backgroundColor: selectedRepository === repository.id ? "#2196f30a" : "#ffffff",
            }}
            className={styles.wrapper}
            onClick={() => setSelectedRepository(repository.id)}>
            <div className={styles.valueBlock}>
                <p className={styles.valueText}>{repository.name}</p>
            </div>
            <div className={styles.valueBlock}>
                <p className={styles.valueText}>{repository.language}</p>
            </div>
            <div className={styles.valueBlock}>
                <p className={styles.valueText}>{repository.forks_count}</p>
            </div>
            <div className={styles.valueBlock}>
                <p className={styles.valueText}>{repository.stargazers_count}</p>
            </div>
            <div className={styles.valueBlock}>
                <p className={styles.valueText}>
                    {new Date(repository.updated_at).toLocaleDateString("ru")}
                </p>
            </div>
        </div>
    );
};

export default RepositoryListItem;
