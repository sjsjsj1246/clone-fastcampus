import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LectureItem from ".";

describe("강의 아이템은", () => {
  it("제목을 가지고 있어야 한다.", () => {
    const { getByRole } = render(<LectureItem />);

    const title = getByRole("heading", { name: /초격차 패키지/i });

    expect(title).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureItem />);

    const bagdge = getByText("Best");

    expect(bagdge).toBeInTheDocument();
  });

  it("썸네일을 가지고 있어야 한다.", () => {
    const { getByAltText } = render(<LectureItem />);

    const thumbnail = getByAltText("초격차 패키지");

    expect(thumbnail).toBeInTheDocument();
  });

  it("강의 설명을 렌더링 해야한다.", () => {
    const { getByText } = render(<LectureItem />);

    const thumbnail = getByText("개발 운영 아키텍트를 아우르는");

    expect(thumbnail).toBeInTheDocument();
  });
});
