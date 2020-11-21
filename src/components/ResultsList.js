import React from 'react';
import { htmlToText } from 'html-to-text';

import ResultsItem from './ResultsItem';

const ResultsList = ({ searchResults, setActiveVideoId }) => {
	return (
		<div>
			{searchResults.map((item) => (
				<ResultsItem
					kind={item.id.kind}
					title={htmlToText(item.snippet.title)}
					channel={item.snippet.channelTitle}
					description={item.snippet.description}
					imgURL={item.snippet.thumbnails.medium.url}
					videoId={item.id.videoId}
					key={item.snippet.title}
					setActiveVideoId={setActiveVideoId}
				/>
			))}
		</div>
	);
};

export default ResultsList;
