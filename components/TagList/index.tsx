import { Tag } from "interface/lecture";
import React from "react";

interface Props {
  tagListData: Tag[];
}

export default function TagList({ tagListData }: Props): JSX.Element {
  const tagList = tagListData.map((tag) => {
    return <span key={tag.id}>{tag.name}</span>;
  });

  return <div>{tagList}</div>;
}
