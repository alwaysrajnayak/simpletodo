import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="list-bg-container">
      <div>
        <li className="list-container">
          <p className="title-text">{title}</p>
          <button className="delete-btn" onClick={onDeleteTodo} type="button">
            Delete
          </button>
        </li>
      </div>
    </div>
  )
}

export default TodoItem
