import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { setPage, setQuery } from "@/app/store/reducers/querySlice";
import { useAppDispatch } from "@/app/store/hooks";
import { Button } from "@mui/material";

const Header: FC = () => {
    const [value, setValue] = useState<string>("");
    const dispatch = useAppDispatch();
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentBlock}>
                <input
                    placeholder="Введите поисковый запрос"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.input}
                />
                <Button
                    onClick={() => {
                        dispatch(setQuery(value));
                        dispatch(setPage(1));
                    }}
                    sx={{
                        backgroundColor: "#2196F3",
                        fontSize: 15,
                        fontWeight: 500,
                        padding: "8px 22px",
                    }}
                    variant="contained">
                    ИСКАТЬ
                </Button>
            </div>
        </div>
    );
};

export default Header;
