import React, { Component } from 'react';
import Input from 'material-ui/Input';

export class ControlledInput extends Component {

  state = {
    value: this.props.value
  };

  handleChange = ({ target }) => this.setState({value: target.value});

  render = () => <Input {...this.props} onChange={this.handleChange} value={this.state.value} />

}

export default ControlledInput;
