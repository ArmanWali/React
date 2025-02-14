import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// First component (default export)
export default function App() {
  return (
    <>
		<header className="App-header">
			<img src={reactLogo} className="App-img" alt="logo" />
			<p className='App-p1'>ReactFacts</p>
		</header>
		<main>
			<h1 className='App-h1'>Fun Facts About React</h1>
			<ul className='App-list'>
				<li className='App-list-items'>Was first released in 2013</li>
				<li className='App-list-items'>Was originally created by Jordan Walke</li>
				<li className='App-list-items'>Has well over 100k stars on GitHub</li>
				<li className='App-list-items'>Is maintained by Meta</li>
				<li className='App-list-items'>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
	  </main>				
    </>
  );
}

// Second component (named export)
export function App2() {
  return (
    <>
		<header className='header'>
		<img  src={reactLogo} className="App-logo" alt="React-Logo" />
		<nav>
			<ul className='nav-list'>
				<li className='nav-list-item'>Pricing</li>
				<li className='nav-list-item'>About</li>
				<li className='nav-list-item'>Contact</li>
			</ul>
		</nav>
		</header>

		<main>
			<h1 className='h1'>Reason I am exited to learn React</h1>
			<ol className='reasons-list'>
				<li className='reasons-list-item'>
					React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎
				</li>
				<li>
					I am more likely to get a job as a front end developer if I know React 💼
				</li>
			</ol>
		</main>

		<footer className='footer'>
			<small>&#169; 2025 wali development. All rights reserved.</small>
		</footer>
    </>
  );
}