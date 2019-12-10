import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    const list = ['プログラミング', 'お買い物'];

    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList list={list} />
      </div>
    );
  }
}

export default App;


