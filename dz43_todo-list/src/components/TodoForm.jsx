import { useState } from "react"

export const TodoForm = ({onAddTodo}) => {
    const [{title, body}, setData] = useState({
        title: '',
        body: ''
    })

    const handleChangeForm = ({target: {name, value}}) => {
        setData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        onAddTodo({title, body})
        setData({title: '', body: ''})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={title} type="text" name="title" onChange={handleChangeForm}/>
            <input value={body} type="text" name="body" onChange={handleChangeForm}/>
            <button type="submit">Submit</button>
        </form>
    )
}