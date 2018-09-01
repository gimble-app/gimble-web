import React, {Component} from "react";
import styled from "styled-components";

const WebkitTouchSafeWrapper = styled.div`
    -webkit-touch-callout: none;
`;

class LongPressAware extends Component {

  componentDidMount = () => {
    this.scrollListener = window.addEventListener("scroll", () => {
      this.timer && this.handleButtonRelease();
    });

    this.contextMenuListener = window.addEventListener("contextmenu", (e) => {
      const isLongPressAware = e.target.closest(".long-press-aware");
      if(isLongPressAware) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollListener);
    window.removeEventListener("contextmenu", this.contextMenuListener);
  };

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
    this.timer = null;
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

