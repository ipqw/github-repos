import { Dispatch, FC, SetStateAction } from "react";
import styles from "./DetailedRepository.module.scss";
import { repositoryApiSlice } from "@/app/store/services/repositoryApiSlice";
import { useAppSelector } from "@/app/store/hooks";
import starIcon from "@/public/icons/StarIcon.svg";
import Image from "next/image";

interface IProps {
    selectedRepository: number;
    setSelectedRepository: Dispatch<SetStateAction<number>>;
}

const DetailedRepository: FC<IProps> = ({ selectedRepository }) => {
    const { query, sort, order, per_page, page } = useAppSelector((state) => state.query);
    const { data } = repositoryApiSlice.useGetRepositoriesQuery(
        { query, sort, order, per_page, page },
        { skip: query ? false : true },
    );
    const repository = data?.items.find((el) => el.id === selectedRepository);
    const { data: languages } = repositoryApiSlice.useGetLanguagesQuery(
        repository?.full_name || "",
        { skip: repository ? false : true },
    );
    const stylizedLanguages = Object.keys(languages || {});
    return (
        <div className={styles.wrapper}>
            <p style={{ display: repository ? "none" : "block" }} className={styles.selectRepoText}>
                Выберите репозиторий
            </p>
            <div style={{ display: repository ? "block" : "none" }} className={styles.contentBlock}>
                <div className={styles.topBlock}>
                    <p className={styles.title}>{repository?.name}</p>
                </div>
                <div className={styles.bottomBlock}>
                    <aside className={styles.leftBlock}>
                        <div className={styles.mainLanguage}>{repository?.language}</div>
                        <div className={styles.secondaryLanguagesBlock}>
                            {stylizedLanguages.map((el, index) => {
                                return (
                                    <div key={index} className={styles.secondaryLanguage}>
                                        {el}
                                    </div>
                                );
                            })}
                        </div>
                        <p className={styles.licence}>{repository?.license?.name}</p>
                    </aside>
                    <aside className={styles.rightBlock}>
                        <Image width={24} height={24} src={starIcon.src} alt="star" />
                        <p className={styles.starCounter}>{repository?.stargazers_count}</p>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DetailedRepository;
