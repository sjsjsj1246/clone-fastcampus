import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Detail: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav aria-label="fastcampus">
        <ul className={styles.menu} />
      </nav>

      <div role="banner">
        <div className={styles.banner} />
      </div>

      <div title="lectureList">
        <h1>강의 목록</h1>
      </div>
    </div>
  );
};

export default Detail;
