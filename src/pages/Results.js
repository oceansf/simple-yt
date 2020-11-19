import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

import Searchbar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const Results = ({ searchResults, getResults }) => {
	return (
		<Container>
			<Searchbar getResults={getResults} />
			<Box textAlign="center">
				<Typography variant="h2">Results</Typography>
				<ResultsList searchResults={searchResults} />
			</Box>
		</Container>
	);
};

export default Results;
