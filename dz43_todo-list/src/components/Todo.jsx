export const Todo = ({id, title, body, isActive, onChangeStatus}) => {
   
    return (
        <div 
            className="todo"
            onClick={() => onChangeStatus(id)}
        >
            <span>{isActive ? '✅' : '❌'}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}