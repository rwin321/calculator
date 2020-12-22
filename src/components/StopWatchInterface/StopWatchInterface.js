import React from 'react'
import s from './WatchInterface.module.css'

const StopWatchInterface = ({ time }) => {
	return (
		<div className={ s.watch }>
			<div>
				<span>
					{ (time.m >= 10) ? time.m : '0' + time.m }
				</span>
			</div> :
			<div>
				<span>
					{ (time.s >= 10) ? time.s : '0' + time.s }
				</span>
			</div> :
			<div>
				<span>
					{ (time.ms >= 10) ? time.ms : '0' + time.ms }
				</span>
			</div>
		</div>
	)
}

export default StopWatchInterface