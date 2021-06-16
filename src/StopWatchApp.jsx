import {useEffect, useState} from 'react'
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { timer, interval } from 'rxjs'
import {
	first,
	startWith,
	scan,
	share
} from 'rxjs/operators'
import s from './StopWatchApp.module.css'

const StopWatchApp = () => {

	const [time, setTime] = useState(0)
	const [isGoing, setIsGoing] = useState(false)
	const [isWait, setIsWait] = useState(false)

	let timer$ = interval(1000)
	useEffect(() => {

		let startApp = timer$
			.pipe(
				startWith(time),
				scan(time => time + 1),
				share(),
			)
			.subscribe(i => {
				{
					isGoing && setTime(i)
				}
			})

		return () => startApp.unsubscribe()
	}, [isGoing, time, timer$])

	// handleClickers for START/STOP
	const onClick = button => {
		const start = isGoing;
		if (button === 'Start') {
			setIsGoing(!start)
		} else if (button === 'Stop') {
			setTime(0)
			setIsGoing(!start)
		}
	}
	// handleClickers for RESET
	const resetClick = () => {
		setIsGoing(true)
		setTime(0)
	}
	// handleClickers for WAIT
	const waitClick = () => {
		const doubleClick = timer(300);
		doubleClick.pipe(first()).subscribe(() => {
			setIsGoing(false)
		})
	}
	// shows HH:MM:SS
	const showTime = time => new Date(time * 1000)
		.toISOString()
		.substr(11, 8)

	return (
		<div className = {s.App}>
			<h3 className={s.title}><span>STOPWATCHER</span></h3>
			<div className = {s.displayWrapper}>
				{ showTime(time) }
			</div>
			<ButtonGroup className = {s.btnGroup}
			             size = 'large'
			             color = 'primary'
			             aria-label = 'large contained primary button group'>
				<Button onClick = {
					isGoing ? () => onClick('Stop') : () => onClick('Start')
				}>
					{isGoing ? 'Stop' : 'Start'}
				</Button>
				<Button onDoubleClick = {waitClick}>Wait</Button>
				<Button onClick = {resetClick}>Reset</Button>
			</ButtonGroup>
				<div className={s.wait} >
					{isGoing && <h2>to puase it - double tap on wait!</h2>}
				</div>

		</div>
	)
}

export default StopWatchApp