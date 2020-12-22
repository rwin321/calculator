import React, {useState} from 'react'
import s from './App.module.css'
import StopWatchInterface
	from './components/StopWatchInterface/StopWatchInterface'
import SWButtons from './components/SWButtons/SWButtons'

const App = () => {
	const [time, setTime] = useState({
		ms: 0,
		s: 0,
		m: 0,
		h: 0
	})
	const [interv, setInterv] = useState()
	const [status, setStatus] = useState(0)
	// Not started = 0
	// started = 1
	// stopped = 2

	let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

	const start = () => {
		run()
		setStatus(1)
		setInterv(setInterval(run, 10));
	};

	const run = () => {
		if(updatedM === 60){
			updatedH++
			updatedM = 0
		}
		if(updatedS === 60){
			updatedM++
			updatedS = 0
		}
		if(updatedMs === 100){
			updatedS++
			updatedMs = 0
		}
		updatedMs++
		return setTime({
			ms:updatedMs,
			s:updatedS,
			m:updatedM,
			h:updatedH
		})
	}

	const stop = () => {
		clearInterval(interv);
		setStatus(2);
	};

	const reset = () => {
		clearInterval(interv)
		setStatus(0)
		setTime({ms:0, s:0, m:0, h:0})
	};

	const resume = () => start();

	return (
		<div className = {s.app}>
			<div className={ s.clockContainer }>
				<div className={ s.stopWatch }>
					<StopWatchInterface time={ time } />
					<SWButtons status={ status }
					           resume={ resume }
					           reset={ reset }
					           stop={ stop }
					           start={ start }
					/>
				</div>
			</div>
		</div>
	)
}

export default App