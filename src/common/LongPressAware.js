import React, {Component} from "react";
import styled from "styled-components";

window.oncontextmenu = function ({target}) {
  const isLongPressAware = target.closest(".long-press-aware");
  return !isLongPressAware;
};

const WebkitTouchSafeWrapper = styled.div`
    -webkit-touch-callout: none;
`;

class LongPressAware extends Component {

  handleButtonPress = (e) => {
    const target = e.target;
    const timeout = 800;
    this.timer = setTimeout(() => {
        window.navigator.vibrate && window.navigator.vibrate(30);
        this.props.onPress(target);
      }
        , timeout
    );
  };

  handleButtonRelease = () => {
    clearTimeout(this.timer);
  };

  render() {
    const {children} = this.props;
    return (
      <WebkitTouchSafeWrapper
        className="long-press-aware"
        onTouchStart={this.handleButtonPress}
        onTouchEnd={this.handleButtonRelease}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
      >{children}</WebkitTouchSafeWrapper>
    );
  }
}

export default LongPressAware;

