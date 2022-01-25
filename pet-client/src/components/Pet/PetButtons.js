import axios from "axios";
import React, { useContext } from "react";
import { Button, Modal } from "semantic-ui-react";
import { setUserTokenContext } from "../../context/UserAuth";

function PetButtons() {
	const { user: userFromCtx } = useContext(setUserTokenContext);//chanig a name. insert different obj in user
	let urlParams = new URLSearchParams(window.location.search);//searching url
	const id = urlParams.get("_id");//extracts id
	const [saveModal, setSaveModal] = React.useState(false);
	const [deleteModal, setDeleteModal] = React.useState(false);
	const [unSaveModal, setUnSaveModal] = React.useState(false)

	async function handleDelete() {
		const url = `http://localhost:5050/api/pets/${id}`;

		const response = await axios.delete(url);
		console.log(response);

		window.location.replace("http://localhost:3000/pets");
	}
	

	async function handleSavePet() {
		const url = `http://localhost:5050/api/pets/myPets/${id}`;

		const response = await axios.put(url, {
			data: { userId: userFromCtx._id },
		});
		console.log(response);//appears in server terminal

		window.location.replace("http://localhost:3000/myPetsPage");
	}
	async function handleUnSavePet() {
		const url = `http://localhost:5050/api/pets/myPetsRemove/${id}`;

		const response = await axios.put(url, {
			data: { userId: userFromCtx._id },
		});
		console.log(response);

		window.location.replace("http://localhost:3000/AllPets");
	}

	return (
		<>{ userFromCtx && //returns all
			<div>
			
					<Button
					
						color="orange"
						content="Save Pet"
						onClick={() => setSaveModal(true)}
					/>
					<Modal open={saveModal} dimmer="blurring">
						<Modal.Header>Confirm Save Pet</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to save this pet?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button onClick={() => setSaveModal(false)} content="Cancel" />
							<Button
								positive
								icon="save"
								labelPosition="right"
								content="Save Pet"
								onClick={handleSavePet}
							/>
						</Modal.Actions>
					</Modal>


<Button

						color="grey"
						content="UnSave Pet"
						onClick={() => setUnSaveModal(true)}
					/>
					<Modal open={unSaveModal} dimmer="blurring">
						<Modal.Header>Confirm UnSave Pet</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to remove this pet?</p>
						</Modal.Content>

						<Modal.Actions>
							<Button onClick={() => setUnSaveModal(false)} content="Cancel" />
							<Button
								positive
								icon="save"
								labelPosition="right"
								content="Remove this Pet from my account"
								onClick={handleUnSavePet}
							/>
						</Modal.Actions>
					</Modal>
					<Button
					floated ="right"
						icon="trash alternate outline"
						color="red"
						content="Delete Pet"
						onClick={() => setDeleteModal(true)}
					/>
					<Modal open={deleteModal} dimmer="blurring">
						<Modal.Header>Confirm Delete</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to delete this pet?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button  onClick={() => setDeleteModal(false)} content="Cancel" />
							<Button
								negative
								icon="trash"
								labelPosition="right"
								content="Delete"
								onClick={handleDelete}
							/>
						</Modal.Actions>
					</Modal>
		
		</div>
		}
		<div style={{
fontSize: "25px",
color: "red"
		}}>
		{!userFromCtx && 
			 "Please signup/login in order to add pet to your pets page"
		
		}
		</div>
		</>
		
	);
}

export default PetButtons;
