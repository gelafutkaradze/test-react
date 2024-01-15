export const TodoItem = ({ todo, todos, setTodos }) => {
  return (
    <div className='cont' style={{ display: 'flex', gap: 10 }}>
      <p>{todo.title}</p>
      <button
        className='delete-btn'
        onClick={() => {
          const filtered = todos.filter(el => el.title !== todo.title)
          setTodos(filtered)
        }}
      >
        <div>
          <i class='fa-regular fa-trash-can delete-icon'></i>
        </div>
      </button>
    </div>
  )
}
