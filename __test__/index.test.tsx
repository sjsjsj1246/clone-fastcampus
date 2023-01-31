import { render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Home />);

    const menu = getByRole("navigation", {
      name: /fastcampus/g,
    });

    expect(menu).toBeInTheDocument();
  });

  it("베너가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Home />);

    const banner = getByRole("banner", {
      name: "",
    });

    expect(banner).toBeInTheDocument();
  });

  it("베너가 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Home />);

    const lectureList = getByTitle("lectureList");

    expect(lectureList).toBeInTheDocument();
  });
});
