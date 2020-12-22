import React from 'react'
import s from './SWButtons.module.css'
import Button from '@material-ui/core/Button'


const SWButtons = (props) => {

	const {
		start,
		resume,
		stop,
		status,
		reset } = props

	return (
		<div className={ s.btns }>
			{( status === 0 )
				? <Button className = { s.btn }
					onClick = { start }
			        variant="outlined"
			        color="primary">
			start</Button>
				: ""
			}
			{( status === 1 )
				? <div>
					<Button className = { s.btn }
						onClick = { stop }
				        variant="outlined"
				        color="primary">
						stop</Button>
					<Button className = { s.btn }
						onClick = { reset }
				        variant="outlined"
				        color="primary">
						reset</Button>
				</div>
				: ""

			}
			{( status === 2 )

			? <div>
				<Button className = { s.btn }
					onClick = { resume }
			        variant="outlined"
			        color="primary">
					resume</Button>
				<Button className = { s.btn }
					onClick = { reset }
			        variant="outlined"
			        color="primary">
					reset</Button>
			</div> : ""
			}
		</div>
	)
}

export default SWButtons