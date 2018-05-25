import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Page from "../../common/Page";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

export class EventForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      fieldValues: {}
    };
  }

  handleChange = name => event => {
    this.props.onChange({
      [name]: event.target.value,
    })
  };

  render () {
    const { classes, fieldValues } = this.props;

    return (
      <Page>
        <TextField
          id="title"
          label="Title"
          className={classes.textField}
          defaultValue={fieldValues.title}
          onChange={this.handleChange('title')}
          margin="normal"
          autoFocus
        />
      </Page>
    );
  }
}

export default withStyles(styles)(EventForm);
