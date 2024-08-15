import { IItem } from "@/app/types";
import { FC } from "react";
import styles from "./RepositoryListItem.module.scss";
interface IProps {
    repository: IItem;
}

const RepositoryListItem: FC<IProps> = ({ repository }) => {
    return (
        <div className={styles.wrapper}>
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
