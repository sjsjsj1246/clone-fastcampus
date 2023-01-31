import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from ".";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    const { getByText } = render(<Menu />);

    const menu = getByText("fastcampus");

    expect(menu).toBeInTheDocument();
  });
});
