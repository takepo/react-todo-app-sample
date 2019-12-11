import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Form(props) {
  return (
    <form>
      <TextField
        name="value"
        label="やること"
        value={props.value}
        onChange={props.handleChange}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
      >
        追加
      </Button>
    </form>
  );
}

export default Form;

