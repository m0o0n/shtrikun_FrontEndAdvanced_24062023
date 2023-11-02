import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllTodosThunk } from "../store/todo/actions"
import { Todo } from "./Todo"

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)
    useEffect(() => {
        dispatch(fetchAllTodosThunk())
    }, [dispatch])
    return (
        <>
            {
                todos.map(
                    ({ title, body, isDone, id }) =>
                        <Todo
                            key={id}
                            id={id}
                            title={title}
                            body={body}
                            isActive={isDone}
                        />
                )
            }
        </>
    )
}

export default TodoList