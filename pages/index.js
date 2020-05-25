import Head from 'next/head'
import Router from 'next/router'
import { useState, useRef, useEffect } from 'react'
import SearchBar from 'components/SearchBar'

export default function Home() {
	const searchEl = useRef(null);
	const [routing, setRouting] = useState(false);
	const onSearch = (queryValue) => {
		setRouting(true);
		setTimeout(() => {
			Router.push('/search/[query]', `/search/${queryValue}`)
		}, 300);
	}

	const getTransformValue = () => {
		const textOffset = window.innerWidth < 640 ? 3.5 : 3;
		return `calc(-50vh + ${2 + textOffset}rem)`;
	}

	useEffect(() => {
		console.log(searchEl)
		if (routing)
			searchEl.current.style.setProperty('--transform-translate-y', getTransformValue());
	}, [routing, searchEl])

	return (
		<section className="flex flex-col justify-center w-full max-w-4xl py-12 px-4 sm:px-6">
			<Head>
				<title>Github User Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className={`text-2xl md:text-4xl -my-20 mb-8 ml-2 transition-opacity duration-150${routing ? ' opacity-0' : ''}`}>Github User Search</h1>
			<div ref={searchEl} className="transform transition-transform duration-300">
				<SearchBar onSearch={onSearch}/>
			</div>
		</section>
	);
}
