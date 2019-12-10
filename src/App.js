import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;


