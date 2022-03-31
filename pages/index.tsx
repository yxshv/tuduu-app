import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Bar } from "../components/bar";
import { Shower } from "../components/shower";
import { Todo } from "../components/todo";

interface TodoI {
	name: string,
	done: boolean
}

const Home: NextPage = () => {
	const [todos, setTodos] = useState<Array<TodoI>>([]);

	useEffect(() => {
		let data = localStorage.getItem("todos");

		if (!data) {
			setTodos([]);
		} else {
			let json = JSON.parse(data);

			let result = [];

			for (const key in json) {
				if (json.hasOwnProperty(key)) {
					result.push({ name: key, done: json[key] });
				}
			}

			setTodos(result);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Todo App</title>
			</Head>

			<main>
				<h1 className="m-[30px] text-center text-4xl font-bold text-white">
					Todo App
				</h1>
				<Bar update={setTodos} />
				<Shower todos={todos} update={setTodos} />
			</main>
		</>
	);
};

export default Home;
