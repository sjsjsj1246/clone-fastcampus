import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from ".";

describe("Home", () => {
  it("베너가 렌더링 되어야 한다.", () => {
    const { getByRole } = render(<Banner />);

    const banner = getByRole("banner", {
      name: "",
    });

    expect(banner).toBeInTheDocument();
  });
});
