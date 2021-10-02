import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '../card/Card';
import { Alert, Grid } from '@mui/material';
import './Board.css';
const Bord = () => {
	const defaultBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	const [values, togglevalues] = useState(defaultBoard);
	const [turn, changeTurn] = useState(true);
	const [disable, toggledisable] = useState(false);
	const [winmessage, setmessage] = useState('');

	const win = (i) => {
		let char = turn ? 'X' : 'O';
		// vertical check
		if (
			values[i] === char &&
			values[(i + 3) % 9] === char &&
			values[(i + 6) % 9] === char
		) {
			return true;
		}
		// horizontal check
		let weight = i > 2 ? 3 : 0;
		weight = i > 5 ? 6 : weight;
		if (
			values[(i % 3) + weight] === char &&
			values[((i + 1) % 3) + weight] === char &&
			values[((i + 2) % 3) + weight] === char
		) {
			return true;
		}
		// diagonal check
		if (values[0] === char && values[4] === char && values[8] === char) {
			return true;
		}
		if (values[2] === char && values[4] === char && values[6] === char) {
			return true;
		}
		return false;
	};

	const onClickCard = (i) => {
		if (disable) {
			return;
		}
		let data = values;
		if (turn && values[i] === ' ') {
			data[i] = 'X';
		} else if (values[i] === ' ') {
			data[i] = 'O';
		} else {
			return;
		}
		togglevalues(data);
		changeTurn(!turn);
		if (!values.includes(' ')) {
			setmessage(`Match is Draw`);
		}
		if (win(i)) {
			toggledisable(true);
			setmessage(`${turn ? 'X' : 'O'} Wins`);
		}
	};

	const resetHandler = () => {
		toggledisable(false);
		togglevalues(defaultBoard);
		setmessage('');
	};
	let alertmessage = winmessage;
	return (
		<div>
			<Grid spacing={2} justify='center'>
				<Grid item xs={12}>
					<div className='Board'>
						{values.map((val, i) => (
							<span
								key={i}
								onClick={() => {
									onClickCard(i);
								}}
							>
								<Card character={val} />
							</span>
						))}
						<Grid item xs={11} style={{ margin: '10px' }}>
							{winmessage.length > 0 ? (
								winmessage === 'Match is Draw' ? (
									<Alert icon={false} severity='error' justify='center'>
										{alertmessage}
									</Alert>
								) : (
									<Alert icon={false} severity='info'>
										{alertmessage}
									</Alert>
								)
							) : (
								<p></p>
							)}
						</Grid>
						<Grid item xs={4} style={{ margin: '0 0 0 37%' }}>
							<Button variant='outlined' onClick={resetHandler}>
								Reset
							</Button>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Bord;
