import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";

const Home: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const [generatedFreiCafes, setGeneratedFreiCafes] = useState<String>("");

	const generateFreiCafe = async (e: any) => {
		e.preventDefault();
		setGeneratedFreiCafes("");
		setLoading(true);
		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(''),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		// This data is a ReadableStream
		const data = response.body;
		if (!data) {
			return;
		}

		const reader = data.getReader();
		const decoder = new TextDecoder();
		let done = false;

		while (!done) {
			const { value, done: doneReading } = await reader.read();
			done = doneReading;
			const chunkValue = decoder.decode(value);
			setGeneratedFreiCafes((prev) => prev + chunkValue);
		}
		setLoading(false);
	};
	return (
		<div className="wrapper">
			<Head>
				<title>Frei Tamás kávé név generátor</title>
			</Head>
			<h1>Cafe Frei név generátor</h1>
			<h2>Generálj véletlenszerű kávé neveket a Cafe Frei stílusához hasonlóan a ChatGPT API-val</h2>
			<button className={`generator ${loading ? 'loading' : ''}`} onClick={generateFreiCafe} disabled={loading}><span>Generálok újat</span><i></i></button>
			{generatedFreiCafes && (
				<>
					<ul>
						{generatedFreiCafes
							.substring(generatedFreiCafes.indexOf("1") + 3)
							.split("2.")
							.map((generatedFreiCafe) => {
								return (
									<li>{generatedFreiCafe}</li>
								);
							})}
					</ul>
				</>
			)}
		</div>
	);
};

export default Home;
