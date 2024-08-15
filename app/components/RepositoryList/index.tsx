import { IItem } from "@/app/types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import RepositoryListItem from "../RepositoryListItem";
import styles from "./RepositoryList.module.scss";
import arrowIcon from "@/public/icons/arrow.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setOrder, setSortParam } from "@/app/store/reducers/querySlice";

interface IProps {
    repositories: IItem[];
    selectedRepository: number;
    setSelectedRepository: Dispatch<SetStateAction<number>>;
}

const RepositoryList: FC<IProps> = ({
    repositories,
    selectedRepository,
    setSelectedRepository,
}) => {
    const dispatch = useAppDispatch();
    const { sort, order } = useAppSelector((state) => state.query);
    return (
        <div>
            <div className={styles.columnLabels}>
                <div className={styles.columnLabelBlock}>
                    <Image
                        style={{
                            display: sort === "" ? "block" : "none",
                            transform: "scaleY(1)",
                        }}
                        width={20}
                        height={20}
                        src={arrowIcon.src}
                        alt="arrow"
                    />
                    <p
                        onClick={() => {
                            dispatch(setSortParam(""));
                            dispatch(setOrder("desc"));
                        }}
                        className={styles.columnLabelText}>
                        Название
                    </p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <p style={{ cursor: "default" }} className={styles.columnLabelText}>
                        Язык
                    </p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <Image
                        style={{
                            display: sort === "forks" ? "block" : "none",
                            transform: order === "desc" ? "scaleY(1)" : "scaleY(-1)",
                        }}
                        width={20}
                        height={20}
                        src={arrowIcon.src}
                        alt="arrow"
                    />
                    <p
                        onClick={() => {
                            if (sort === "forks") {
                                dispatch(setOrder(order === "asc" ? "desc" : "asc"));
                            } else {
                                dispatch(setSortParam("forks"));
                                dispatch(setOrder("desc"));
                            }
                        }}
                        className={styles.columnLabelText}>
                        Число форков
                    </p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <Image
                        style={{
                            display: sort === "stars" ? "block" : "none",
                            transform: order === "desc" ? "scaleY(1)" : "scaleY(-1)",
                        }}
                        width={20}
                        height={20}
                        src={arrowIcon.src}
                        alt="arrow"
                    />
                    <p
                        onClick={() => {
                            if (sort === "stars") {
                                dispatch(setOrder(order === "asc" ? "desc" : "asc"));
                            } else {
                                dispatch(setSortParam("stars"));
                                dispatch(setOrder("desc"));
                            }
                        }}
                        className={styles.columnLabelText}>
                        Число звезд
                    </p>
                </div>
                <div className={styles.columnLabelBlock}>
                    <Image
                        style={{
                            display: sort === "updated" ? "block" : "none",
                            transform: order === "desc" ? "scaleY(1)" : "scaleY(-1)",
                        }}
                        width={20}
                        height={20}
                        src={arrowIcon.src}
                        alt="arrow"
                    />
                    <p
                        onClick={() => {
                            if (sort === "updated") {
                                dispatch(setOrder(order === "asc" ? "desc" : "asc"));
                            } else {
                                dispatch(setSortParam("updated"));
                                dispatch(setOrder("desc"));
                            }
                        }}
                        className={styles.columnLabelText}>
                        Дата обновления
                    </p>
                </div>
            </div>
            {repositories.map((el, index) => {
                return (
                    <RepositoryListItem
                        selectedRepository={selectedRepository}
                        setSelectedRepository={setSelectedRepository}
                        key={index}
                        repository={el}
                    />
                );
            })}
        </div>
    );
};

export default RepositoryList;
