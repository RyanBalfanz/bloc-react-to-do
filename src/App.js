import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ]
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit called');
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
        { this.state.todos.map( (todo, index) => 
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
        )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" />
           <input type="submit" />
         </form>
      </div>
    );
  }
}

export default App;
