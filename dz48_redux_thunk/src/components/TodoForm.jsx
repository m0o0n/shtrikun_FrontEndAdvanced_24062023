import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTodoThunk, updateTodoThunk } from "../store/todo/actions"

export const TodoForm = ({id, title, body, handleAction, ...props}) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        title: title ? title : '',
        body: body ? body : ''
    })
    const handleChangeForm = ({target: {name, value}}) => {
        setData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        switch(handleAction){
            case 'add':
                dispatch(createTodoThunk({title: data.title, body: data.body}))
                setData({title: '', body: ''})
                break
            case 'edit':
                dispatch(updateTodoThunk({id, title: data.title, body: data.body}))
                props.togleModal(false)
                break
            default: break;
        }
        
        
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={data.title} type="text" name="title" onChange={handleChangeForm}/>
            <input value={data.body} type="text" name="body" onChange={handleChangeForm}/>
            <button type="submit">Submit</button>
        </form>
    )
}