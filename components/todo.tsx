import { ChangeEvent } from "react";

interface TodoProps {
  todo: string[];
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  del: {
    name: string;
    _delete: (name: string) => () => void;
  };
}

// TODO: todo is an array and at todo[1] there is a boolean whereas you've typed it as an array of strings. i have already made the interaface for you, you just need to fix your types.

export const Todo = ({ todo, change, del }: any) => {
  return (
    <div className="todos">
      <div className="todo">
        <div className="todo-stuffs">
          <input
            type="checkbox"
            checked={todo[1]}
            onChange={change}
            id={todo[0]}
          />
          <label>{todo}</label>
        </div>
        <button type="button" onClick={del._delete(todo[0])}>
          Delete
        </button>
      </div>
    </div>
  );
};
