import React, { useState } from 'react';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';

import Home from '../pages/Home';
import Results from '../pages/Results';

const App = () => {
	const [searchResults, setSearchResults] = useState([]);

	const getResults = async (searchTerm) => {
		const result = await axios.get(
			'https://www.googleapis.com/youtube/v3/search',
			{
				params: {
					part: 'snippet',
					q: searchTerm,
					key: process.env.REACT_APP_API_KEY,
					maxResults: '20',
				},
			}
		);
		setSearchResults(result.data.items);
	};

	console.log(searchResults);

	return (
		<React.Fragment>
			<CssBaseline />
			{searchResults.length < 1 ? (
				<Home getResults={getResults} />
			) : (
				<Results searchResults={searchResults} getResults={getResults} />
			)}
		</React.Fragment>
	);
};

export default App;
