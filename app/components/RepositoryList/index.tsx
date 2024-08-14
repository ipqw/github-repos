import { IItem } from "@/app/types";
import { FC } from "react";
import RepositoryListItem from "../RepositoryListItem";
import styles from "./RepositoryList.module.scss";

interface IProps {
    repositories: IItem[];
}

const RepositoryList: FC<IProps> = ({ repositories }) => {
    return (
        <div>
            <div className={styles.columnLabels}>
                <div className={styles.columnLabelBlock}>
                    <p className={styles.columnLabelText}>Название</p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <p className={styles.columnLabelText}>Язык</p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <p className={styles.columnLabelText}>Число форков</p>
                </div>

                <div className={styles.columnLabelBlock}>
                    <p className={styles.columnLabelText}>Число звезд</p>
                </div>

                <div className={styles.columnLabelBlock}>
                    <p className={styles.columnLabelText}>Дата обновления</p>
                </div>
            </div>
            {repositories.map((el, index) => {
                return <RepositoryListItem key={index} repository={el} />;
            })}
        </div>
    );
};

export default RepositoryList;
