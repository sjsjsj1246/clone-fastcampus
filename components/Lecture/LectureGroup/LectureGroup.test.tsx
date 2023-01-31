import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LectureGroup from ".";

describe("강의 그룹은", () => {
  it("제목을 가지고 있어야 한다.", () => {
    const { getByRole } = render(<LectureGroup />);

    const title = getByRole("heading", { name: "이번 주 베스트 셀링 강의" });

    expect(title).toBeInTheDocument();
  });

  it("뱃지를 가지고 있어야 한다.", () => {
    const { getByText } = render(<LectureGroup />);

    const badge = getByText("Best");

    expect(badge).toBeInTheDocument();
  });
});
