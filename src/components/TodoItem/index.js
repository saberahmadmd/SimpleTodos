import './index.css'

const TodoItem = ({todoDetails, onDeleteTodo}) => {
  const {title, id} = todoDetails

  const onDelete = () => {
    onDeleteTodo(id) // Call onDeleteTodo with the id
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button onClick={onDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
