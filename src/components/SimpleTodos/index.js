import {Component} from 'react'
import TodoItem from '../TodoItem' // Make sure the path is correct
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  // Handle delete for a specific todo
  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="mainContainer">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="listitems">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo} // Passing individual todo item
                onDeleteTodo={this.onDeleteTodo} // Pass the delete handler with id
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
