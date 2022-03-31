import { ChangeEvent } from "react";
import { Todo } from "./todo";

interface TodoI {
	name: string;
	done: boolean;
}

interface ShowerProps {
	todos: Array<TodoI>;
	update: (todos: Array<TodoI>) => void;
}

export const Shower = ({ todos, update }: ShowerProps) => {

	function change(e: ChangeEvent<HTMLInputElement>) {
		let data = localStorage.getItem("todos");

		if (!data) {
			update([]);
		} else {
			let json = JSON.parse(data);
			json[`${e.target.id}`] = e.target.checked;

			let result = [];

			for (const key in json) {
				if (json.hasOwnProperty(key)) {
					result.push({ name: key, done: json[key] });
				}
			}

			localStorage.setItem(`todos`, JSON.stringify(json));
			update(result);
		}
	}

	function del(name: string) {
		const t = name;

		return function (e: any) {
			let data = localStorage.getItem("todos");

			if (!data) {
				update([]);
			} else {
				let json = JSON.parse(data);

				delete json[`${t}`];

				let result = [];

				for (const key in json) {
					if (json.hasOwnProperty(key)) {
						result.push({ name: key, done: json[key] });
					}
				}

				localStorage.setItem(`todos`, JSON.stringify(json));
				update(result);
			}
		}
	}

	return (
		<div className="shower mt-[100px] flex items-center justify-center text-white">
			{todos.map((todo: TodoI, index: number) => {
				return <Todo key={index} todo={todo} change={change} del={del} />;
			})}
		</div>
	);
};