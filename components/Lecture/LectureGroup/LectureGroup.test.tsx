import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createWrapper } from "utils/createWrapper";
import LectureGroup from ".";

describe("강의 그룹은", () => {
  const Element = render(<LectureGroup />, {
    wrapper: createWrapper(),
  });

  it("제목을 가지고 있어야 한다.", () => {
    const title = Element.getByRole("heading", {
      name: "이번 주 베스트 셀링 강의",
    });

    expect(title).toBeInTheDocument();
  });
});
