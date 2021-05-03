import axios from "axios";
import React from "react";
import { Button, Modal } from "semantic-ui-react";

function PetButtons() {
	let urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("_id");
	const [modal, setModal] = React.useState(false);
	async function handleDelete() {
		const url = `http://localhost:5050/api/pets/${id}`;
		const response = await axios.delete(url);
		console.log(response);

		window.location.replace("http://localhost:3000/pets");
	}

	return (
		<>
			<div>
				<Button.Group widths="7">
					<Button content="Adopt" primary />
					<Button color="pink">Foster</Button>
					<Button color="orange" icon="plus">
						Add to My Pets Page
					</Button>
				</Button.Group>
				<Button color="purple">Unsave</Button>
				<div>
					<Button
						icon="trash alternate outline"
						color="red"
						content="Delete Pet"
						onClick={() => setModal(true)}
					/>
					<Modal open={modal} dimmer="blurring">
						<Modal.Header>Confirm Delete</Modal.Header>
						<Modal.Content>
							<p>Are you sure you want to delete this pet?</p>
						</Modal.Content>
						<Modal.Actions>
							<Button onClick={() => setModal(false)} content="Cancel" />
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
