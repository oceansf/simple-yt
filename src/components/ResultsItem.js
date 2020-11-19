import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

const ChannelThumbnail = styled.img`
	border-radius: 50%;
	cursor: pointer;
`;

const VideoThumbnail = styled.img`
	cursor: pointer;
`;

const ResultsItem = ({ kind, title, channel, description, imgURL }) => {
	return (
		<Box
			display="flex"
			p={4}
			style={{
				borderBottom: '1px solid lightgrey',
			}}
		>
			{kind === 'youtube#channel' ? (
				<ChannelThumbnail src={imgURL} alt={title} />
			) : (
				<VideoThumbnail src={imgURL} alt={title} />
			)}
			<Box textAlign="left" pl={2}>
				<Typography variant="h4">{title}</Typography>
				{kind === 'youtube#channel' ? null : (
					<Typography variant="subtitle2">{channel}</Typography>
				)}
				<Typography variant="body1">{description}</Typography>
			</Box>
		</Box>
	);
};

export default ResultsItem;
