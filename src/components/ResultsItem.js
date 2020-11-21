import React from 'react';

import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

const Thumbnail = styled.img`
	border-radius: ${(props) => (props.channel ? '50%' : null)};
	cursor: pointer;
`;

const ResultsItem = ({
	kind,
	title,
	channel,
	description,
	imgURL,
	videoId,
	setActiveVideoId,
}) => {
	return (
		<Box
			display="flex"
			p={4}
			style={{
				borderBottom: '1px solid lightgrey',
			}}
		>
			{/* TODO: Add a channel route and component */}

			<Thumbnail
				src={imgURL}
				channel={kind === 'youtube#channel' ? true : false}
				onClick={() => setActiveVideoId(videoId)}
			/>

			<Box textAlign="left" pl={2}>
				<Typography variant="h6">{title}</Typography>
				{kind === 'youtube#channel' ? null : (
					<Typography variant="subtitle2">{channel}</Typography>
				)}
				<Typography variant="body1">{description}</Typography>
			</Box>
		</Box>
	);
};

export default ResultsItem;
