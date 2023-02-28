import { fireEvent, screen, render } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";

describe("<RandomUser/>", () => {
  it("loads user when clicking on the button", async () => {
    render(<RandomUser />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleEl = await screen.findByRole("heading", { level: 2 });
    screen.debug(titleEl);
  });
});
