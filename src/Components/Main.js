import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import Filter from './Filter';
import axios from 'axios';

const Main = () => {

	const [list, setList] = useState([]);

	const filterListingData = (identifier) => {
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
	    let listId = e.target.value,
	    	listIdData = list[listId - 1];

	    axios.put(`http://localhost:3001/properties/${listId}`, { ...listIdData, "status": listIdData.status ? 0 : 1 })
	      .then(res => {
	      	if(res.data){
	      		axios.get('http://localhost:3001/properties').then(result => {
					if(result){
						setList(result.data);
					}
				})
	      	}
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