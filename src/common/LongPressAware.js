import React, {Component} from "react";

class LongPressAware extends Component {
  handleButtonPress = () => {
    const timeout = 800;
    this.timer = setTimeout(this.props.onPress, timeout);
  };

  handleButtonRelease = () => {
    clearTimeout(this.timer);
  };

  render() {
    const {children} = this.props;
    return (
      <div
        onTouchStart={this.handleButtonPress}
        onTouchEnd={this.handleButtonRelease}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
      >{children}</div>
    );
  }
}

export default LongPressAware;
