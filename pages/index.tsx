import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Bar } from './components/bar'
import { Shower } from './components/shower'

const Home: NextPage = () => {

	const [todos, setTodos] = useState<Array<Array<string>>>([]);

	useEffect(() => {
		let data = localStorage.getItem("todos");

		if (!data) {
			setTodos([]);
		} else {
			let result = [];
			let json = JSON.parse(data)
			for (const key in json) {
				if (json.hasOwnProperty(key)) {
					result.push([key, json[key]]);
				}
			}
			setTodos(result);
		}
	}, [])

	return (
		<>
			<Head>
				<title>Todo App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className='text-white text-center text-4xl m-[30px] font-bold'>Todo App</h1>
				<Bar update={setTodos} />
				<Shower todos={todos} update={setTodos} />
			</main>

		</>
	)
}

export default Home