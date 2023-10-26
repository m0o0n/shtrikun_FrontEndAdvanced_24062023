import { useDispatch } from "react-redux"
import { toggleTodo } from "../store/todoReducer"

export const Todo = ({id, title, body, isActive}) => {
    const dispatch = useDispatch()
    const handleChangeStatus = (id) => {
        dispatch(toggleTodo({id}))
      }
    return (
        <div 
            className="todo"
            onClick={() => handleChangeStatus(id)}
        >
            <span>{isActive ? '✅' : '❌'}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}