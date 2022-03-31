import { ChangeEvent } from "react";

interface TodoI {
    name: string;
    done: boolean;
}

interface TodoProps {
    todo: TodoI;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
    del: (name: string) => any;
}

export const Todo = ({ todo, change, del }: TodoProps) => {
    return (
        <div className="todos">
            <div className="todo">
                <div className="todo-stuffs">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        id={todo.name}
                        onChange={change}
                    />
                    <label>{todo.name}</label>
                </div>
                <button type="button" onClick={del(todo.name)}>
                    Delete
                </button>
            </div>
        </div>
    );
};
