import React from 'react'
import s from './WatchInterface.module.css'

const WatchInterface = () => {
	return <div className={ s.watch }>
		<h2>WATCH INTERFACE</h2>
		<div className={ s.btn_block }>
			<button className={ s.start }>start</button>
			<button className={ s.pause }>pause</button>
			<button className={ s.stop }>stop</button>
		</div>
	</div>
}

export default WatchInterface