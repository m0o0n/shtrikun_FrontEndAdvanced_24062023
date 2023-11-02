import { useDispatch, useSelector } from 'react-redux'
import { updateTodoThunk } from '../../store/todo/actions'
import { toggleTodo } from '../../store/todo/todoReducer'
import style from './style.module.css'
const SwitchCheckbox = ({checked, id}) => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)
    const handleChangeStatus = () => {
       dispatch(toggleTodo({ id })) 
       dispatch(updateTodoThunk({id, isDone: !todos.find(e => e.id === id).isDone}))
    }
    return (
        <div className={style.container}>
            <input onChange={handleChangeStatus} type="checkbox" checked={checked} id="toggle-button" className={style.toggleButton} />
            <label htmlFor="toggle-button" className={style.text}></label>
        </div>
    )
}

export default SwitchCheckbox