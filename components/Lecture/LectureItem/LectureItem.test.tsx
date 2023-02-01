import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Lecture } from "interface/lecture";
import LectureItem from ".";

const lecture: Lecture = {
  id: 1,
  category: {
    id: 0,
    name: "프로그래밍",
  },
  title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DebOps 운영",
  tags: [
    {
      id: 0,
      name: "평생소장",
    },
    {
      id: 1,
      name: "AWS",
    },
    {
      id: 2,
      name: "DevOps",
    },
  ],
  description: "Java/Spring 필수 25개 기술 스택 이 강의 하나로 끝!",
  thumb: "/thumb.jpg",
  isHot: true,
  isNew: true,
};

describe("강의 아이템은", () => {
  it("제목을 가지고 있어야 한다.", () => {
    const { getByRole } = render(<LectureItem lecture={lecture} />);

    const title = getByRole("heading", {
      name: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DebOps 운영",
    });

    expect(title).toBeInTheDocument();
  });

  it("태그를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureItem lecture={lecture} />);

    const tag = getByText("평생소장");

    expect(tag).toBeInTheDocument();
  });

  it("썸네일을 가지고 있어야 한다.", () => {
    const { getByAltText } = render(<LectureItem lecture={lecture} />);

    const thumbnail = getByAltText("초격차 패키지");

    expect(thumbnail).toBeInTheDocument();
  });

  it("강의 설명을 렌더링 해야한다.", () => {
    const { getByText } = render(<LectureItem lecture={lecture} />);

    const thumbnail = getByText(
      "Java/Spring 필수 25개 기술 스택 이 강의 하나로 끝!"
    );

    expect(thumbnail).toBeInTheDocument();
  });
});
