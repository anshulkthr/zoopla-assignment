import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import Filter from './Filter';
import axios from 'axios';

const Main = () => {

	const [list, setList] = useState([]);
	const [filter, setFilter] = useState( );

	const filterListingData = (identifier) => {
		setFilter(identifier);
		axios.get('http://localhost:3001/properties').then(result => {
			if(result){
				if(isNaN(identifier)){
					setList(result.data);
				}else{
					let filtered = result.data.filter((res)=> {
	    				return res.status === identifier;
					});
					setList(filtered);
				}
			}
		})
	}

	const handleClick = (e) => {
	    let listId = e.target.value;
	    	axios.get(`http://localhost:3001/properties/${listId}`).then(result => {
			    axios.put(`http://localhost:3001/properties/${listId}`, { ...result.data, "status": result.data.status ? 0 : 1 })
			      .then(res => {
			      	if(res.data){
						filterListingData(filter);	
			      	}
		      	})
		  	})
  	}

	useEffect(() => {
		axios.get('http://localhost:3001/properties').then(result => {
			if(result){
				setList(result.data);
			}
		})
	}, []);

	return (
		<div className="ListGridContainer">
			<Filter filterData={filterListingData} />
			<Listing listData={list} statusTrigger={handleClick} />
		</div>
	)
}


export default Main;