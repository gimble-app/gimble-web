import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import { invite } from './actions';

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled(Input)`
  flex: 1;
   max-width: 400px;
`;

export class AddFriendForm extends Component {

  state = {
    submitting: false,
    sent: false,
    value: ''
  };

  handleChange = ({ target }) => this.setState({value: target.value});

  render () {
    const { invite } = this.props;
    const { submitting, sent } = this.state;

    return (
      <Form
        onFocus={() => this.setState({ sent: false })}
        onSubmit={async event => {
          const form = event.target;
          event.preventDefault();
          this.setState({ submitting: true });
          if (await invite(form.email.value)) {
            this.setState({ value: '', submitting: false, sent: true });
          }
          else {
            this.setState({ submitting: false });
          }
        }}
      >
        <StyledInput
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="add a friend by their email"
          autoFocus
          disabled={submitting}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Button
          color="primary"
          disabled={submitting || sent}
          type="submit"
        >
          {sent ? <CheckIcon /> : submitting ? <CircularProgress size={16} /> :  "Invite"}
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  invite
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(AddFriendForm)
