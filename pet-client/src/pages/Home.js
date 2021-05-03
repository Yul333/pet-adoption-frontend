// import { useEffect, useState } from "react";
// import axios from "axios";
// import PetList from "../components/PetList";

// function Home() {
// 	const [pets, setPets] = useState([]);

// 	useEffect(() => {
// 		loadPets();
// 	}, []);

// 	async function loadPets() {
// 		const url = "http://localhost:5050/api/pets";
// 		const response = await axios.get(url);
// 		console.log(response);
// 		setPets(response.data);
// 	}

// 	return (
// 		<div>
// 			HOMMMEEEE
// 			<PetList pets={pets} />
// 		</div>
// 	);
// }
import React from 'react';
import { Link } from 'react-router-dom';
// import {useEffect} from 'react'
// import PetList from '../components/Index/PetList'
// import axios from 'axios'
import {
  Button,

  Divider,
  Grid,
  Header,

  Image,


  Segment
} from 'semantic-ui-react';

function Home() {

  return(
    <>
      {/* <PetList pets={petsJson}/> */}
      <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable >
      
        <Grid.Row>
          <h1> Welcome Friend!</h1>
          <br/>
        <Image src={"https://image.freepik.com/free-photo/cat-dog-resting-together-sofa-best-friends_389076-5.jpg"} size='large' />
                  <Grid.Column floated='center' width={12}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Why it's a great idea to adopt a pet?
            </Header>
           
            <p style={{ fontSize: '1.43em' }}>
            Pet adoption is quickly becoming the preferred way to find a new dog, puppy, cat or kitten. Best of all, there are so many benefits when you adopt a dog or adopt a cat over buying. 
              There are many health benefits of owning a pet. They can increase opportunities to exercise, get outside, and socialize. Regular walking or playing with pets can decrease blood pressure, cholesterol levels, and triglyceride levels. Pets can help manage loneliness and depression by giving us companionship.
            </p>
          
          </Grid.Column>
          <Grid.Column floated='center' width={12}>
                       
    <Divider hidden />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Link to="/SearchAFriend">
     <Button color="orange" icon= "plus" widths="7" >
        <p>Search pets</p>
     </Button>
 </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </>
  )
}





export default Home;
