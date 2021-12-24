import React, { useState } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Filter = (props) => {
	const [alignment, setAlignment] = useState('left');

	const handleAlignment = (event, newAlignment) => {
    	setAlignment(newAlignment);
    	let filterIdentifier = Number(event.target.getAttribute('filter-id'));
    	props.filterData(filterIdentifier);
  	};

	return (
	    <ToggleButtonGroup
	      value={alignment}
	      exclusive
	      onChange={handleAlignment}
	      aria-label="text alignment"
	    >
	      <ToggleButton value="left" filter-id="all" aria-label="left aligned">
	        All
	      </ToggleButton>
	      <ToggleButton value="center" filter-id="1" aria-label="centered">
	        Active
	      </ToggleButton>
	      <ToggleButton value="right" filter-id="0" aria-label="right aligned">
	        Expired
	      </ToggleButton>
	    </ToggleButtonGroup>
	  );
}

export default Filter;