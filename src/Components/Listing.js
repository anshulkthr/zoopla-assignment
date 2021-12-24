import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import BedIcon from '@mui/icons-material/Bed';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import Button from '@mui/material/Button';

import axios from 'axios';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Listing = React.memo(props => {
	return (
		(props.listData && props.listData.map(result => {
			let price = new Intl.NumberFormat('en-UK', {
							    style: 'currency',
							    currency: 'GBP',
							    maximumSignificantDigits: 3}).format(result.price);
			return (
		    <Paper key={result.id} elevation={3} sx={{ p: 2, margin: '30px', flexGrow: 1 }}>
		      <Grid container spacing={2}>
		        <Grid item sx={{ width: 'auto', maxWidth: 450 }}>
	            <Img alt="complex" src={result.image} />
		        </Grid>
		        <Grid item xs={12} sm container>
		          <Grid item xs container direction="column" justifyContent="flex-start"
	  						alignItems="flex-start" spacing={2}>
		            <Grid item xs align='left'>
		            	<Typography variant="subtitle2" component="div" color="purple">
			              Guide Price
			            </Typography>
			            <Typography variant="h5" component="div" color="purple" fontWeight='bold'>
			              {price}
			            </Typography>
			           
		            	<Stack direction="row" spacing={2} sx={{ margin: '10px 0'}}>
			            	<Chip size="small" icon={<BedIcon />} label={result.bedroom} />
			              <Chip size="small" icon={<BathtubOutlinedIcon />} label={result.washroom} />
			              <Chip size="small" icon={<ChairOutlinedIcon />} label={result.reception} />
		              </Stack>

		              <Typography variant="subtitle1" component="div" fontWeight='bold'>
			              {result.bedroom} bed flat to rent
			            </Typography>
			            <Typography variant="subtitle2" component="div" color="#76767C">
			              {result.address}
			            </Typography>
			            <List>
					          <ListItem disablePadding>
				              <ListItemIcon sx={{ minWidth: '30px' }}>
				                <MultipleStopOutlinedIcon size="small" sx={{ color: red[500] }} />
				              </ListItemIcon>
				              <ListItemText secondary={result.desc1} />
					          </ListItem>
					          <ListItem disablePadding>
				              <ListItemIcon sx={{ minWidth: '30px' }}>
				                <MultipleStopOutlinedIcon size="small" sx={{ color: red[500] }} />
				              </ListItemIcon>
				              <ListItemText secondary={result.desc2} />
					          </ListItem>
					        </List>
					        <Chip size="small" color={result.status ? 'success' : 'error'} label={result.status ? 'available' : 'expired'} sx={{ fontWeight: 600, margin: '15px 0' }} />
		            </Grid>
		          </Grid>
		          <Grid item>
		            <Grid sx={{ width: 'auto', maxWidth: 73 }}>
		            	<Img alt="complex" src={result.vendor} />
		          	</Grid>
		          </Grid>
		        </Grid>
		      </Grid>
		      <Divider light />
	       	<Grid container direction="row" justifyContent="space-between"
	  						alignItems="center" spacing={2} sx={{margin: '16px 0 0 0', color: '#76767C', width: 'auto'}}>
	       		<Grid>
	       			<Typography variant="subtitle2" component="div" fontSize="12px">
	              Listed on: {result.date}
	            </Typography>
			      </Grid>
			      <Grid>
			      	<Button onClick={props.statusTrigger} value={result.id} variant="outlined" sx={{ fontWeight: 600, fontSize: "12px" }}>
			      		{result.status ? 'Mark as Expired' : 'Add back to List' }
			      	</Button>
			      </Grid>
			    </Grid>
		    </Paper>
	    )
	  }))	
	);
	
});

export default Listing;