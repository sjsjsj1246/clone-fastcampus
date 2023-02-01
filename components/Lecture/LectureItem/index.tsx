import TagList from "components/TagList";
import { Lecture } from "interface/lecture";
import React from "react";

interface Props {
  lecture: Lecture;
}

export default function LectureItem({ lecture }: Props) {
  return (
    <div>
      <img src={lecture.thumb} alt="초격차 패키지" />
      <TagList tagListData={lecture.tags} />
      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>
    </div>
  );
}
