import React from "react";
import { render } from "@testing-library/react";
import AutoScalingText from "../auto-scaling-text";

test("renders", () => {
  // (2) But in our tests, if we log the inner HTML of this component, we won't see such className assigned
  const { container } = render(<AutoScalingText />);
  console.log(container.innerHTML); // Output: <div style="transform: scale(1,1);"></div>

  // (3) This is happening because we're using an empty object as mock. It should be great to have a way to see that class name there

  // (5) If we run the tests again, we will see how the class name is assigned: <div class="autoScalingText" style="transform: scale(1,1);"></div>
});
