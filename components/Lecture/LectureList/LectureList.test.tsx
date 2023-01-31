import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LectureList from ".";

describe("강의 목록은", () => {
  it("노출이 되어야 한다.", () => {
    render(<LectureList />);
  });
});
