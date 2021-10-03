import './App.css';
import { Fragment, useState } from 'react';
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Box,
	Container,
	Grid,
	FormControl,
	Paper,
	Slider,
	Input,
	Switch,
	Select,
	InputLabel,
	MenuItem,
	Button,
	Alert,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
function App() {
	const [age, setAge] = useState(20);
	const [feet, setFeet] = useState('');
	const [inches, setInches] = useState('');

	const removeHandler = () => {
		setAge(age - 1);
	};
	const addHandler = () => {
		setAge(age + 1);
	};
	const [weight, setWeight] = useState(10);
	const handleBlur = () => {
		if (weight < 0) {
			setWeight(0);
		} else if (weight > 200) {
			setWeight(200);
		}
	};
	const handleInputChange = (event) => {
		setWeight(event.target.value === '' ? '' : Number(event.target.value));
	};

	const handleSliderChange = (event, newValue) => {
		setWeight(newValue);
	};
	const feetChangeHandler = (event) => {
		setFeet(event.target.value);
		console.log(feet);
	};
	const inchesChangeHandler = (event) => {
		setInches(event.target.value);
		console.log(inches);
	};
	let bmi;
	let height;
	let result;
	const calculateHandler = () => {
		height = feet * 0.3048 + inches * 0.0254;
		bmi = weight / Math.pow(height, 2);
		bmi = Number.parseFloat(bmi).toPrecision(3);
		alert('Your BMI is ' + bmi);
		if (bmi > 30.0) {
			result = (
				<Alert variant='error' icon={false}>
					Your BMI is {bmi}, Obesity
				</Alert>
			);
		}
		if (bmi > 25 || bmi < 29.9) {
			result = (
				<Alert variant='warning' icon={false}>
					Your BMI is {bmi}, Overweight
				</Alert>
			);
		}

		if (bmi > 18.0 || bmi < 24.9) {
			result = (
				<Alert variant='success' icon={false}>
					Your BMI is {bmi} , healthy weight
				</Alert>
			);
		}
		if (bmi > 25 || bmi < 29.9) {
			result = (
				<Alert variant='warning' icon={false}>
					Your BMI is {bmi}, under weight
				</Alert>
			);
		}

		console.log(bmi);
	};
	return (
		<Fragment>
			<div>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position='static'>
						<Toolbar>
							<FitnessCenterIcon />
							<Typography
								variant='h6'
								component='div'
								sx={{ flexGrow: 1 }}
								align='center'
							>
								BMI Calculator
							</Typography>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='menu'
								sx={{ mr: 2 }}
							>
								{/* <Brightness4Icon /> */}
							</IconButton>
						</Toolbar>
					</AppBar>
				</Box>
			</div>
			<main>
				<div>
					<Container style={{ marginTop: '10vh' }} justify='center' xs={12}>
						<Grid container>
							<Grid item xs={2} lg={2} md={2}></Grid>
							<Grid
								item
								xs={12}
								lg={8}
								md={8}
								style={{
									padding: 2,
									textAlign: 'center',
								}}
							>
								<Grid container>
									<Grid
										item
										lg={5}
										xs={12}
										style={{
											textAlign: 'center',
										}}
									>
										<Paper elevation={6} sx={{ p: 2 }}>
											<Typography variant='h4'>Age</Typography>
											<FormControl
												variant='filled'
												sx={{ m: 1, minWidth: 120 }}
											>
												<Typography
													variant='h3'
													style={{
														fontSize: '5rem',
														fontWeight: '700',
														color: 'gray',
													}}
												>
													{age}
												</Typography>
											</FormControl>
											<div>
												<IconButton
													color='primary'
													component='span'
													onClick={removeHandler}
												>
													<RemoveCircleIcon fontSize='large' />
												</IconButton>
												<IconButton
													color='primary'
													component='span'
													onClick={addHandler}
												>
													<AddCircleIcon fontSize='large' />
												</IconButton>
											</div>
										</Paper>
									</Grid>
									<Grid
										item
										lg={2}
										xs={12}
										style={{
											textAlign: 'center',
										}}
									>
										<p></p>
									</Grid>
									<Grid
										item
										lg={5}
										xs={12}
										style={{
											textAlign: 'center',
										}}
									>
										<Paper elevation={6} sx={{ p: 2, minHeight: 201 }}>
											<Typography variant='h5'>Weight</Typography>
											<Typography
												variant='h3'
												style={{
													fontSize: '5rem',
													fontWeight: '700',
													color: 'gray',
												}}
											>
												{weight}
											</Typography>
											<Grid
												container
												spacing={2}
												alignItems='center'
												justify='center'
											>
												<Grid item xs={2}></Grid>
												<Grid item xs={6}>
													<Slider
														value={typeof weight === 'number' ? weight : 0}
														onChange={handleSliderChange}
														step={0.1}
														defaultValue={10}
														min={10}
														max={200}
														aria-labelledby='input-slider'
														style={{ marginTop: '2vh' }}
														n
													/>
												</Grid>
												<Grid item>
													<Input
														value={weight}
														size='small'
														onChange={handleInputChange}
														onBlur={handleBlur}
														style={{ width: '50px' }}
														inputProps={{
															step: 0.1,
															min: 10,
															max: 200,
															type: 'number',
															'aria-labelledby': 'input-slider',
														}}
													/>
												</Grid>
											</Grid>
										</Paper>
									</Grid>
									<Grid
										item
										xs={12}
										lg={12}
										md={12}
										style={{ padding: 2, marginTop: '2vh' }}
									>
										<Paper elevation={6} sx={{ p: 2 }}>
											<Grid container>
												<Grid item xs={4}></Grid>
												<Grid item xs={4} style={{ marginBottom: '7vh' }}>
													<Typography variant='h5'>Height</Typography>
												</Grid>
												{/* <Grid item xs={4}>
													cm
													<Switch defaultChecked />
													ft
												</Grid> */}
												<Grid container>
													<Grid item xs={2}></Grid>

													<Grid item xs={3}>
														<FormControl
															variant='filled'
															sx={{ minWidth: 120 }}
														>
															<InputLabel id='feet'>Feet</InputLabel>
															<Select
																labelId='feet'
																value={feet}
																onChange={feetChangeHandler}
															>
																<MenuItem value=''>
																	<em>None</em>
																</MenuItem>
																<MenuItem value={1}>1</MenuItem>
																<MenuItem value={2}>2</MenuItem>
																<MenuItem value={3}>3</MenuItem>
																<MenuItem value={4}>4</MenuItem>
																<MenuItem value={5}>5</MenuItem>
																<MenuItem value={6}>6</MenuItem>
																<MenuItem value={7}>7</MenuItem>
																<MenuItem value={8}>8</MenuItem>
															</Select>
														</FormControl>
													</Grid>
													<Grid item xs={2}></Grid>
													<Grid item xs={3}>
														<FormControl
															variant='filled'
															sx={{ minWidth: 120 }}
														>
															<InputLabel id='inches'>Inches</InputLabel>
															<Select
																labelId='inches'
																value={inches}
																onChange={inchesChangeHandler}
															>
																<MenuItem value=''>
																	<em>None</em>
																</MenuItem>
																<MenuItem value={0}>0</MenuItem>
																<MenuItem value={1}>1</MenuItem>
																<MenuItem value={2}>2</MenuItem>
																<MenuItem value={3}>3</MenuItem>
																<MenuItem value={4}>4</MenuItem>
																<MenuItem value={5}>5</MenuItem>
																<MenuItem value={6}>6</MenuItem>
																<MenuItem value={7}>7</MenuItem>
																<MenuItem value={8}>8</MenuItem>
																<MenuItem value={9}>9</MenuItem>
																<MenuItem value={10}>10</MenuItem>
																<MenuItem value={11}>11</MenuItem>
															</Select>
														</FormControl>
													</Grid>
												</Grid>
											</Grid>
										</Paper>
									</Grid>
									<Grid
										item
										xs={12}
										lg={12}
										md={12}
										style={{ padding: 2, marginTop: '2vh' }}
									>
										<Paper elevation={6} sx={{ p: 2 }}>
											<Grid container>
												<Grid item xs={4}></Grid>
												<Grid item xs={4} style={{ marginBottom: '7vh' }}>
													<Typography variant='h5'>Gender</Typography>
												</Grid>
												<Grid item xs={4}></Grid>
												<Grid item xs={4}>
													<Typography variant='h1'>I'm</Typography>
												</Grid>
												<Grid item xs={8}>
													<Grid container>
														<Grid item xs={4}>
															<Typography variant='h5'>Female</Typography>
														</Grid>
														<Grid item xs={4}>
															<Switch defaultChecked />
														</Grid>
														<Grid item xs={4}>
															<Typography variant='h5'>Male</Typography>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
										</Paper>
									</Grid>
									<Grid
										item
										xs={12}
										lg={12}
										md={12}
										style={{ padding: 2, marginTop: '2vh', marginLeft: '4vw' }}
									>
										<Button
											variant='contained'
											sx={{ borderRadius: 30 }}
											onClick={calculateHandler}
										>
											Calculate
										</Button>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={0} lg={2}></Grid>
						</Grid>
					</Container>
				</div>
			</main>
		</Fragment>
	);
}

export default App;
