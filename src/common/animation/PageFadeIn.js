import React from "react";
import AnimationTarget from "./AnimationTarget";
import Fade from "@material-ui/core/Fade";

const PageFadeIn = ({ children, on = true }) =>
  <Fade in={on}>
    <AnimationTarget>
      {children}
    </AnimationTarget>
  </Fade>;

export default PageFadeIn;
