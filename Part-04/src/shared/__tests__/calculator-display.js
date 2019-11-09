import React from "react";
import { render } from "@testing-library/react";
import CalculatorDisplay from "../calculator-display";

// (1) How can we easily assert outputs in Jest? Snapshots are the answer!
test("mounts", () => {
  const { container } = render(<CalculatorDisplay value="0" />);
  // (2) The first time we run this assertion method, a new snapshot will be created.
  // After a second time, Jest will compare the tested component with the snapshot created. If it's different, the test will fail and we will see the diff on the terminal
  expect(container.firstChild).toMatchSnapshot();
  // (3) If the changes on the snapshot are intended, we can update it by running jest with the -u flag or using the interactive terminal (watch mode)
});
