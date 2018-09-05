import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodoAction } from './store/actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      newTodo: e.currentTarget.value
    })
  }

  addNewTodo = () => {
    this.props.dispatch(addTodoAction(this.state.newTodo))
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Add New Todo</h1>
          <input
            type='text'
            value={this.state.newTodo}
            placeholder='New todo...'
            onChange={this.handleInputChange}
          />
          <button onClick={this.addNewTodo}>Submit</button>
        </div>
        <div>
          <h1>Todo List</h1>
          <ul>
            <li>This is where our todos will appear later</li>
            {this.props.todos ?
              this.props.todos.map(todo => {
                return (
                  <li key={todo}>{todo}</li>
                )
              })
            : null}
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    todos: state.todos
  })
}

export default connect(mapStateToProps)(App)

