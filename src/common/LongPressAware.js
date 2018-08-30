import React, {Component} from "react";

window.oncontextmenu = function (e) {
  return !e.target.closest(".long-press-aware");
};

class LongPressAware extends Component {
  
  handleButtonPress = (e) => {
    const target = e.target;
    const timeout = 800;
    this.timer = setTimeout(() => this.props.onPress(target), timeout);
  };

  handleButtonRelease = () => {
    clearTimeout(this.timer);
  };

  render() {
    const {children} = this.props;
    return (
      <div
        className="long-press-aware"
        onTouchStart={this.handleButtonPress}
        onTouchEnd={this.handleButtonRelease}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
      >{children}</div>
    );
  }
}

export default LongPressAware;
