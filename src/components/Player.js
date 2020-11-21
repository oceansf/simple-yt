import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Dialog } from '@material-ui/core';

const Player = ({ activeVideoId, setActiveVideoId }) => {
	const size = useWindowSize();
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		setActiveVideoId('');
	};

	return (
		<Dialog
			open={open}
			keepMounted
			onClose={handleClose}
			PaperProps={{ square: true, overflowY: 'hidden' }}
			maxWidth="false"
		>
			<div style={{ marginBottom: '-50px' }}>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${activeVideoId}`}
					controls
					playing
					width={size.width * 0.85}
					height={size.height * 0.85}
				/>
			</div>
		</Dialog>
	);
};

export default Player;
