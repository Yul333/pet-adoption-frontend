import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Pet = () => {


    const [pet, setPet] = useState([]);
    
    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('_id'); // "edit"

	useEffect(() => {
		loadPets();
	}, []);

	async function loadPets() {
		const url = `http://localhost:5050/api/pets/${id}`;
		const response = await axios.get(url);
		console.log(response);
		setPet(response.data.pets);
	}



    return (
        <div>

          

            


        
  
        </div>
    )
}

export default Pet