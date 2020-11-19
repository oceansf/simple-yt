import React from 'react';
import styled from 'styled-components';
import { Container, Box, Typography } from '@material-ui/core';

import Searchbar from '../components/SearchBar';

const StyledContainer = styled(Container)`
	padding-top: 25%;
	height: 100vh;
`;

const Home = () => {
	return (
		<StyledContainer>
			<Box textAlign="center">
				<Typography variant="h1">Simple YT</Typography>
				<Typography variant="subtitle1">
					YouTube without the distracting algorithms
				</Typography>
			</Box>
			<Searchbar />
		</StyledContainer>
	);
};

export default Home;
