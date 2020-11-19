import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Paper, Box, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledPaper = styled(Paper)`
	width: 45%;
	margin: 2rem auto;
`;

const StyledButton = styled(Button)`
	color: grey;
	border-radius: 0;
	padding: 0 2rem;
`;

const SearchBar = ({ getResults }) => {
	const [text, setText] = useState('');

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	return (
		<StyledPaper elevation={3} square>
			<Box display="flex" pl={2}>
				<TextField
					variant="standard"
					placeholder="Search"
					margin="dense"
					fullWidth
					InputProps={{
						disableUnderline: true,
					}}
					onChange={handleTextChange}
				/>
				<StyledButton
					variant="contained"
					disableElevation
					onClick={() => getResults(text)}
				>
					<SearchIcon />
				</StyledButton>
			</Box>
		</StyledPaper>
	);
};

export default SearchBar;
