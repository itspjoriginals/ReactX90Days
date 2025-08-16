import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch({ type: "todos/updateTodo", payload: { id, text: editText } });
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-zinc-700 text-white px-2 py-1 rounded mr-2"
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.65l-8-3.555L2 5.65V19H0V5c0-.396.232-.753.594-.913l9-4a.999.999 0 01.812 0l9 4A1 1 0 0120 5v14h-2V5.65z" fill="#5C5F62"/><path d="M9 15a.997.997 0 01-.707-.293l-2-2a1 1 0 011.414-1.414L9 12.586l3.293-3.293a1 1 0 111.414 1.415l-4 4A.999.999 0 019 15z" fill="#5C5F62"/></svg>
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                 <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" 
	 width="24px" height="24px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
<path d="M40.8,7.7C40.8,7.7,40.8,7.7,40.8,7.7"/>
<g>
	<path d="M17.2,11.6h17.6c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6,0-4.8,2.2-4.8,4.8V10
		C15.6,10.9,16.3,11.6,17.2,11.6z"/>
	<path d="M43.6,6H42c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.9,6.4-6.4,6.4H17.2c-3.5,0-6.4-2.9-6.4-6.4V6.8
		C10.8,6.3,10.5,6,10,6H8.4c-2.6,0-4.8,2.2-4.8,4.8v34.4c0,2.6,2.2,4.8,4.8,4.8h35.2c2.6,0,4.8-2.2,4.8-4.8V10.8
		C48.4,8.2,46.2,6,43.6,6z M34,30.4L21.2,43.2h0l-5.6,1.6c-0.5,0.1-1-0.4-0.9-0.9l1.6-5.5l12.8-12.8c0.2-0.2,0.5-0.2,0.7,0l4.1,4.2
		C34.2,29.9,34.2,30.2,34,30.4z M37.7,26.7l-1.6,1.6c-0.2,0.2-0.5,0.2-0.7,0l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7l1.6-1.6
		c0.7-0.8,2-0.8,2.7,0l2.1,2.1C38.5,24.7,38.5,25.9,37.7,26.7z"/>
</g>
</svg>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos