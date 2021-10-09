import React from 'react';
import './Card.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Card(props) {
	return (
		// <materialCard variant='outlined' raised='true'>

		<Box
			sx={{
				boxShadow: 3,
				borderRadius: 3,
				p: 2,
				minWidth: 10,
				height: 100,
				margin: 1,
			}}
		>
			<Box sx={{ color: 'text.primary' }}>
				<Button
					style={{
						borderRadius: '16px',
						height: '70px',
						width: '30px',
					}}
				>
					<h1 className={props.character === 'O' ? 'red' : 'blue'}>
						{props.character}
					</h1>
				</Button>
			</Box>
		</Box>

	);
}

export default Card;
