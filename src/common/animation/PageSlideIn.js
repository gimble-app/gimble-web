import React from "react";
import Slide from "@material-ui/core/Slide";
import AnimationTarget from "./AnimationTarget";

const PageSlideIn = ({ children, on = true }) =>
  <Slide in={on} direction="up">
    <AnimationTarget>
      {children}
    </AnimationTarget>
  </Slide>;

export default PageSlideIn;
