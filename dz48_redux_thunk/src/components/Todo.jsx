import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodoThunk } from "../store/todo/actions"
import Modal from "./Modal"
import SwitchCheckbox from "./switchCheckbox"
import { TodoForm } from "./TodoForm"

export const Todo = ({ id, title, body, isActive }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTodoThunk(id))
    }
    const [isOpen, setIsOpen] = useState(false)
    const togleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="todo">
            <div>
                <SwitchCheckbox id={id} checked={isActive}/>
                <span>{isActive ? '✅' : '❌'}</span>
                <button onClick={togleModal}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>

            <h2>{title}</h2>
            <p>{body}</p>

            <Modal isOpen={isOpen} handleClose={setIsOpen}>
                <TodoForm togleModal={setIsOpen} id={id} title={title} body={body} handleAction='edit'/>
            </Modal>
        </div>
    )
}