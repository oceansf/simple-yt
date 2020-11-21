import React from 'react';
import styled from 'styled-components';
import { Container, Box, Typography } from '@material-ui/core';

import Searchbar from '../components/SearchBar';

const StyledContainer = styled(Container)`
	padding-top: 25vh;
	height: 100vh;
`;

const Header = styled(Typography)`
	margin: 1rem 0;
`;

const Home = ({ getResults }) => {
	return (
		<StyledContainer>
			<Box textAlign="center">
				<Header variant="h1">Simple YT</Header>
				<Typography variant="subtitle1">
					YouTube without the distracting algorithms
				</Typography>
			</Box>
			<Searchbar getResults={getResults} />
		</StyledContainer>
	);
};

export default Home;
