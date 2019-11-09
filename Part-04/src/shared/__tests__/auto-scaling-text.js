import React from "react";
import { render } from "@testing-library/react";
import AutoScalingText from "../auto-scaling-text";

// (1) When unit testing react components, we may come across situations where CSS files are imported
test("renders", () => {
  render(<AutoScalingText />);
});
