import { useState } from 'react';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import {
	Container,
	CssBaseline,
	FormGroup,
	Grid,
	TextField,
	ButtonGroup,
	Button,
} from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		error: {
			main: '#EE2575',
			contrastText: '#fff',
		},
		button: {
			main: '#212121',
			contrastText: '#fff',
		},
		function: {
			main: '#00897b',
			contrastText: '#fff',
		},
		result: {
			main: '#fff',
			contrastText: '#fff',
			color: '#fff',
			background: '#fff',
		},
	},
});
function App() {
	const [result, setResult] = useState('');
	const clickHandler = (e) => {
		setResult(result.concat(e.target.name));
	};
	const clearHandler = () => {
		setResult('');
	};
	const backspace = () => {
		setResult(result.slice(0, -1));
	};
	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			setResult('Error');
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<CssBaseline />
				<main className='appConatiner'>
					<div>
						<Container xs='sm'>
							<Grid
								container
								justify='center'
								spacing={0}
								alignitems='center'
								direction='column'
							>
								<Grid item justify='center' xs={3} alignitems='center'>
									<FormGroup>
										<TextField
											color='result'
											id='outlined-basic'
											// label='Result'
											placeholder='Result'
											variant='filled'
											value={result}
											autoFocus='true'
										/>
										<ButtonGroup
											variant='contained'
											style={{ margin: '3px', boxShadow: 'none' }}
										>
											<Button
												varianiant='outlined'
												color='error'
												style={{
													margin: '5px',
													borderRadius: '10px',
													padding: '30px 23%',
												}}
												onClick={clearHandler}
											>
												<ClearIcon />
											</Button>

											<Button
												color='error'
												varianiant='outlined'
												style={{
													margin: '5px 5px 5px 3px',
													borderRadius: '10px',
													padding: '30px 24%',
												}}
												onClick={backspace}
											>
												<BackspaceIcon />
											</Button>
										</ButtonGroup>
										<ButtonGroup
											variant='contained'
											style={{ margin: '3px', boxShadow: 'none' }}
										>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='7'
												onClick={clickHandler}
											>
												7
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='8'
												onClick={clickHandler}
											>
												8
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='9'
												onClick={clickHandler}
											>
												9
											</Button>
											<Button
												varianiant='outlined'
												color='function'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 39px',
												}}
												onClick={clickHandler}
												name='/'
											>
												&divide;
											</Button>
										</ButtonGroup>
										<ButtonGroup
											variant='contained'
											aria-label='outlined button group'
											style={{ margin: '3px', boxShadow: 'none' }}
										>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='4'
												onClick={clickHandler}
											>
												4
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='5'
												onClick={clickHandler}
											>
												5
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='6'
												onClick={clickHandler}
											>
												9
											</Button>
											<Button
												varianiant='outlined'
												color='function'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 40px',
												}}
												onClick={clickHandler}
												name='*'
											>
												*
											</Button>
										</ButtonGroup>
										<ButtonGroup
											variant='contained'
											aria-label='outlined primary button group'
											style={{ margin: '3px', boxShadow: 'none' }}
										>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='1'
												onClick={clickHandler}
											>
												1
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='2'
												onClick={clickHandler}
											>
												2
											</Button>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='3'
												onClick={clickHandler}
											>
												3
											</Button>
											<Button
												varianiant='outlined'
												color='function'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 40px',
												}}
												onClick={clickHandler}
												name='-'
											>
												-
											</Button>
										</ButtonGroup>{' '}
										<ButtonGroup
											variant='contained'
											aria-label='outlined button group'
											style={{ margin: '3px', boxShadow: 'none' }}
										>
											<Button
												color='button'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												name='0'
												onClick={clickHandler}
											>
												0
											</Button>
											<Button
												varianiant='outlined'
												color='button'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												onClick={clickHandler}
												name='.'
											>
												.
											</Button>
											<Button
												color='function'
												varianiant='outlined'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 35px',
												}}
												onClick={clickHandler}
												name='%'
											>
												%
											</Button>
											<Button
												varianiant='outlined'
												color='function'
												style={{
													margin: '3px',
													borderRadius: '10%',
													padding: '30px 37px',
												}}
												onClick={clickHandler}
												name='+'
											>
												+
											</Button>
										</ButtonGroup>
										<br />
										<Button
											variant='contained'
											onClick={calculate}
											color='function'
										>
											=
										</Button>
									</FormGroup>
								</Grid>
							</Grid>
						</Container>
					</div>
				</main>
			</Fragment>
		</ThemeProvider>
	);
}

export default App;
