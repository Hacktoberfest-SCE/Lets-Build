// import logo from './logo.svg';
import './App.css';
import Board from './components/board/Board';
import Container from '@mui/material/Container';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Fragment } from 'react';
import GamepadIcon from '@mui/icons-material/Gamepad';

function App() {
	return (
		// <div className='App'>
		// </div>
		<Fragment>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<GamepadIcon />
					<Typography variant='h6'>Tic Tac Toe</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth='md' justify='center'>
						<Typography
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom
						>
							Welcome to tic tac toe
						</Typography>
					</Container>
					<Container>
						<Board />
					</Container>
				</div>
			</main>
		</Fragment>
	);
}

export default App;
