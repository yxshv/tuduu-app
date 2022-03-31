import { useState } from "react";

interface TodoI {
    name: string;
    done: boolean;
}

type BarProps = {
    update: (todos: Array<TodoI>) => void;
};

export const Bar = ({ update }: BarProps) => {
    const [todo, setTodo] = useState("");

    function addTodo() {
        setTodo("");

        if (todo.length < 0) { return }

        let data = localStorage.getItem("todos");

        let json: any = {};

        if (!data) {
            json = {};
        } else {
            json = JSON.parse(data);
        }

        json[`${todo}`] = false;

        let result: Array<TodoI> = [];

        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                result.push({ name: key, done: json[key] });
            }
        }

        localStorage.setItem(`todos`, JSON.stringify(json));
        update(result);
    }

    return (
        <>
            <div className="bar">
                <input
                    type="text"
                    placeholder="Add a todo"
                    className="block"
                    value={todo}
                    onKeyUp={(e) => { if (e.key === "Enter") { addTodo() } }}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    type="button"
                    className="add-btn m-0 block h-[50px] w-[600px] rounded p-0 font-bold text-white"
                    onClick={addTodo}
                    disabled={todo.length > 0 ? false : true}
                >
                    ADD
                </button>
            </div>
        </>
    );
};

// 