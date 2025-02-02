import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {id: 1, title: 'Book the ticket for today evening', completed: false},
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {id: 4, title: 'Drop the parcel at Bloomingdale', completed: false},
      {id: 5, title: 'Order fruits on Big Basket', completed: false},
      {id: 6, title: 'Fix the production issue', completed: false},
      {id: 7, title: 'Confirm my slot for Saturday Night', completed: false},
      {id: 8, title: 'Get essentials for Sunday car wash', completed: false},
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  onHandleTitle = e => {
    this.setState({newTodoTitle: e.target.value})
  }

  onHandleAddTodo = () => {
    const {newTodoTitle} = this.state

    // Find the number at the end of the title using a regular expression
    const numberMatch = newTodoTitle.match(/(\d+)$/)
    const newTodoCount = numberMatch ? parseInt(numberMatch[0], 10) : 1

    // Extract the title without the number at the end
    const newTodoTitleWithoutNumber = newTodoTitle.replace(/(\d+)$/, '').trim()

    // Create the new todos
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitleWithoutNumber,
      completed: false,
    }))

    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  toggleCompleted = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  render() {
    const {todosList, newTodoTitle} = this.state
    return (
      <div className="mainContainer">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-field-and-add-button-container">
            <input
              type="text"
              placeholder="Enter title (with number at the end)"
              value={newTodoTitle}
              onChange={this.onHandleTitle}
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onHandleAddTodo}
            >
              Add
            </button>
          </div>
          <ul className="listitems">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.onDeleteTodo}
                toggleComplete={this.toggleCompleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
