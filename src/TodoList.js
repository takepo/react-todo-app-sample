import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoList(props) {
  return (
    <List>
      {
        props.list.map((item, i) => (
          <ListItem key={i}>
            <ListItemText primary={item} />
          </ListItem>
        ))
      }
    </List>
  );
}

export default TodoList;

