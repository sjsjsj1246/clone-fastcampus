import Banner from "components/Banner";
import LectureGroup from "components/Lecture/LectureGroup";
import Menu from "components/Menu";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <div title="lectureList">
        <h1>강의 목록</h1>
      </div>

      <Menu />

      <Banner />

      <LectureGroup />
    </div>
  );
};

export default Index;
