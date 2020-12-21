import React from 'react'
import s from './App.module.css'
import WatchInterface from './components/WatchInterface'

const App = () => (

	<div className = { s.App }>
		<header className={ s.header }>
			My StopWatch
		</header>
		<WatchInterface />
	</div>
)

export default App