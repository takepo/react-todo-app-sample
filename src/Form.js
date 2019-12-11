import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className="form">
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

