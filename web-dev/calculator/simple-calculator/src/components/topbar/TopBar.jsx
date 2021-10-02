import React from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function TopBar() {
	return (
		<div>
			<CssBaseline />

			<AppBar>
				<Toolbar>
					<Typography variant='h6'>
						<CalculateIcon /> Calculator
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
