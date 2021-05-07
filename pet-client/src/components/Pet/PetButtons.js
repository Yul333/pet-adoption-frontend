import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import Pet from "../../pages/Pet";
import SavePet from "../Pet/SavePet";
import { setUserTokenContext } from "../../context/UserAuth";

function PetButtons() {
	const { token, user: userFromCtx } = useContext(setUserTokenContext);
	let urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("_id");
	const [saveModal, setSaveModal] = React.useState(false);
	const [deleteModal, setDeleteModal] = React.useState(false);
	const [unSave, setUnSave] = useState(false)

	async function handleDelete() {
		const url = `http://localhost:5050/api/pets/${id}`;

		const response = await axios.delete(url);
		console.log(response);

		window.location.replace("http://localhost:3000/pets");
	}
	// React.useEffect(() => {
	// 	let timeout;
	// 	// if (success) {
	// 	//   timeout = setTimeout(() => setSuccess(false), 3000);
	// 	// }
	// 	return () => {
	// 	  clearTimeout(timeout);
	// 	};
	//   }, [success]);

	async function handleSavePet() {
		const url = `http://localhost:5050/api/pets/myPets/${id}`;

		const response = await axios.put(url, {
			data: { userId: userFromCtx._id },
		});
		console.log(response);

		window.location.replace("http://localhost:3000/myPetsPage");
	}
	async function handleUnSavePet() {
		const url = `http://localhost:5050/api/pets/myPetsRemove/${id}`;

		const response = await axios.put(url, {
			data: { userId: userFromCtx._id },
		});
		console.log(response);

		window.location.replace("http://localhost:3000/myPetsPage");
	}

	return (
		<>
			<div>
				<Button.Group widths="7">
					<Button content="Adopt" primary />
					<Button color="pink">Foster</Button>

					<Button
						// icon="trash alternate outline"
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

					<Modal open={setUnSave} dimmer="blurring">
						<Modal.Header>Confirm UnSave Pet</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to Unsave this pet?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button onClick={() => setUnSave(false)} content="Cancel" />
							<Button
								positive
								icon="save"
								labelPosition="right"
								content="Remove this Pet from my account"
								onClick={handleUnSavePet}
							/>
						</Modal.Actions>
					</Modal>
					{/* <Button color="orange" icon="plus">
						Save Pet
					</Button> */}
				</Button.Group>
				<Button color="purple">Unsave</Button>
				<div>
					<Button
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
							<Button onClick={() => setDeleteModal(false)} content="Cancel" />
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
			</div>
			<div>
				<Button color="grey">Return</Button>
			</div>
		</>
	);
}

export default PetButtons;
