import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['プログラミング', 'お買い物'],
      value: '',
    };
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <Form
          value={this.state.value}
        />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;


