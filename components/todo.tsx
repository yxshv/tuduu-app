import { useRef } from "react"

export const Todo = ({ todo, change, del }: any) => {

    return <div className="todo" >
        <div className="todo-stuffs">
            <input type="checkbox" checked={todo[1]} onChange={change} id={todo[0]} />
            <label>{todo}</label>
        </div>
        <button type="button" onClick={del._delete(todo[0])}>Delete</button>
    </div>
}