import React, { Component } from 'react'
import { Button, Checkbox, Form, Container} from 'semantic-ui-react'

import axios from 'axios'
import { useAuth } from '../context/UserAuth'

//Pet details: Type (dog, cat), Name, Adoption Status, Picture, Height, Weight, Color, Bio, Hypoallergenic (yes/no), dietary restrictions, AdoptionStatus of animal (Poodle, Siamese) 



class AddAPet extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			Type: '',
			Name: '',
			AdoptionStatus: '',
            Picture: '',
            Height: '',
            Weight: '',
            Color: '',
            Bio: '', 
            Hypoallergenic: '', 
            DietaryRestrictions: '', 
            Breed: '',
            Message:'',

		}
	}

	changeHandler = e => {
		// const auth = useAuth();
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5050/api/pets', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
            this.setState({	
            Type: (''),
			Name: (''),
			AdoptionStatus: (''),
            Picture: (''),
            Height: (''),
            Weight: (''),
            Color: (''),
            Bio: (''), 
            Hypoallergenic: (''), 
            DietaryRestrictions: (''), 
            Breed: (''),
            message: ('pet added succesfully') })
	}
//Bio, Hypoallergenic, DietaryRestrictions, Breed
	render() {
		const { Type, Name, AdoptionStatus, Picture, Height, Weight, Color, Bio, Hypoallergenic, DietaryRestrictions, Breed } = this.state
		return (
      <Container text>
        <Form>
			<div> 
    
   
				<form >
					<div>
          <Form.Field>
          <label>
            <p>Type</p>
						<input
							type="text"
							name="Type"
							value={Type}
							onChange={this.changeHandler}
						/>
            </label>
          </Form.Field>


					</div>
      
					<div>
              <Form.Field>
          <label>
            <p>Name</p>
						<input
							type="text"
							name="Name"
							value={Name}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
          
					<div>
          <Form.Field>
          <label>
            <p>AdoptionStatus</p>
						<input
							type="text"
							name="AdoptionStatus"
							value={AdoptionStatus}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Picture</p>
						<input
							type="mediaUrl"
							name="Picture"
							value={Picture}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Height</p>
						<input
							type="text"
							name="Height"
							value={Height}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Weight</p>
						<input
							type="text"
							name="Weight"
							value={Weight}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Color</p>
						<input
							type="text"
							name="Color"
							value={Color}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Bio</p>
						<input
							type="text"
							name="Bio"
							value={Bio}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Hypoallergenic</p>
						<input
							type="text"
							name="Hypoallergenic"
							value={Hypoallergenic}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>DietaryRestrictions</p>
						<input
							type="text"
							name="DietaryRestrictions"
							value={DietaryRestrictions}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>
                    <div>
              <Form.Field>
          <label>
            <p>Breed</p>
						<input
							type="text"
							name="Breed"
							value={Breed}
							onChange={this.changeHandler}
						/>
          </label>
          </Form.Field>
					</div>

					<button onClick= {this.submitHandler}>Submit</button>
				</form>
     
			</div>
      </Form>
      <div>{ this.state.message }</div>
      </Container>
		)
	}
}

export default AddAPet