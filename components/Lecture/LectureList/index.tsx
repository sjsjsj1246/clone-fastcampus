import useLectures from "hooks/useLectures";
import { Lecture } from "interface/lecture";
import React from "react";
import LectureItem from "../LectureItem";

export default function LectureList() {
  const { isLoading, data } = useLectures();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.lectureList.map((lecture: Lecture) => (
        <LectureItem key={lecture.id} lecture={lecture} />
      ))}
    </div>
  );
}
