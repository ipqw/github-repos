import { FC } from "react";
import styles from "./PagesNavigation.module.scss";
import { MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setPage, setPerPage } from "@/app/store/reducers/querySlice";
import { repositoryApiSlice } from "@/app/store/services/repositoryApiSlice";
import arrowIcon from "@/public/icons/leftButton.svg";
import Image from "next/image";

const PagesNavigation: FC = () => {
    const { per_page, query, sort, page, order } = useAppSelector((state) => state.query);
    const dispatch = useAppDispatch();
    const { data, isLoading } = repositoryApiSlice.useGetRepositoriesQuery(
        { query, sort, order, per_page, page },
        { skip: query ? false : true },
    );
    const pagesAmount = Math.ceil(Number(data?.total_count) / per_page);
    return (
        <div className={styles.wrapper}>
            <div className={styles.rowsAmountBlock}>
                <p className={styles.rowsAmountText}>Rows per page:</p>
                <Select
                    value={per_page}
                    onChange={(event) => dispatch(setPerPage(Number(event.target.value)))}
                    displayEmpty
                    sx={{
                        height: 24,

                        "& .MuiSelect-select": {
                            padding: 0,
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "0",
                        },
                    }}
                    inputProps={{ "aria-label": "Without label" }}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </div>
            <div className={styles.pageCounter}>
                {page}-{pagesAmount} of {pagesAmount}
            </div>
            <div className={styles.paginationButton}>
                <div
                    onClick={() => {
                        if (page > 1 && !isLoading) {
                            dispatch(setPage(page - 1));
                        }
                    }}
                    className={styles.paginationButton__imageWrapper}>
                    <Image src={arrowIcon.src} width={24} height={24} alt="previous" />
                </div>
                <div
                    onClick={() => {
                        if (page < pagesAmount && !isLoading) {
                            dispatch(setPage(page + 1));
                        }
                    }}
                    className={styles.paginationButton__imageWrapper}>
                    <Image
                        width={24}
                        height={24}
                        alt="next"
                        src={arrowIcon.src}
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PagesNavigation;
