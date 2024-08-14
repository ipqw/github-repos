import { FC } from "react";
import styles from "./page.module.scss";

const Home: FC = () => {
    return (
        <main className={styles.main}>
            <p className={styles.welcomeText}></p>
        </main>
    );
};

export default Home;
