import React from 'react';

import ResultsItem from './ResultsItem';

const ResultsList = ({ searchResults }) => {
	return (
		<div>
			{searchResults.map((item) => (
				<ResultsItem
					kind={item.id.kind}
					title={item.snippet.title}
					channel={item.snippet.channelTitle}
					description={item.snippet.description}
					imgURL={item.snippet.thumbnails.medium.url}
					key={item.snippet.title}
				/>
			))}
		</div>
	);
};

export default ResultsList;
