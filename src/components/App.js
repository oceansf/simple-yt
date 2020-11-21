import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';

import Home from '../pages/Home';
import Results from '../pages/Results';

import Player from '../components/Player';

const App = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [activeVideoId, setActiveVideoId] = useState('');

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

	console.log(activeVideoId);

	return (
		<React.Fragment>
			<CssBaseline />
			{activeVideoId.length > 0 ? (
				<Player
					activeVideoId={activeVideoId}
					setActiveVideoId={setActiveVideoId}
				/>
			) : null}
			<Switch>
				<Route exact path="/">
					{searchResults.length > 0 ? (
						<Redirect to="/results" />
					) : (
						<Home getResults={getResults} />
					)}
				</Route>
				<Route exact path="/results">
					{searchResults.length === 0 ? (
						<Redirect to="/" />
					) : (
						<Results
							searchResults={searchResults}
							getResults={getResults}
							setActiveVideoId={setActiveVideoId}
						/>
					)}
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default App;
