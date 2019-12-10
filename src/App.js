import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['プログラミング', 'お買い物'],
    };
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;


