import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { editAccount } from "../lib/api";

const INITIAL_USER = {
	FirstName: "",
	LastName: "",
	email: "",
	password: "",

	phone: "",
};



function Account() {

	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const [firstName, setFirstName] =  React.useState("");
	const [lastName, setLastName] =  React.useState("");
	const [email, setEmail] =  React.useState("");
	const [password, setPassword] =  React.useState("");
	const [bio, setBio] =  React.useState("");
	const [phoneNumber, setPhoneNumber] =  React.useState("");

	async function handleSubmit(event) {
				event.preventDefault();

				const userInfo = {
					firstName,
					lastName,
					email,
					password,
					phoneNumber,
					bio,
				};
		
				try {
					console.log("start loading");
					setLoading(true);
					setError("");
					console.log("start sending");
					const user = await editAccount(userInfo);
					console.log("finish sending");
					console.log(user);
					setLoading(false);
				
				} catch (error) {
					setError("Something wrong...");
				} finally {
					setLoading(false);
				}
			}
		

	React.useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user]);

	function handleChange(event) {
		const { name, value } = event.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	}

	// async function handleSubmit(event) {
	// 	event.preventDefault();

	// 	try {
	// 		setLoading(true);
	// 		setError("");
	// 		console.log(user);
	// 	} catch (error) {
	// 		setError("OOOOPs");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }

	return (
		<>
			<Message
				attached
				icon="settings"
				header="Profile settings"
				content="Manage your settings"
				color="teal"
			/>
			<Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
				<Message error header="Oops!" content={error} />
				<Segment style={{ padding: "3em 0em" }} vertical>
					<Grid  stackable>
						<Grid.Column width={13}>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="First Name"
						placeholder="First Name"
						name="name"
						value={user.firstName}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="Last Name"
						placeholder="Last Name"
						name="name"
						value={user.lastName}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="envelope"
						iconPosition="left"
						label="Email"
						placeholder="Email"
						name="email"
						type="email"
						value={user.email}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Password"
						placeholder="Password"
						name="password"
						type="password"
						value={user.password}
						onChange={handleChange}
					/>

					<Form.Input
						fluid
						control="input"
						max={12}
						icon="phone square"
						iconPosition="left"
						label="Phone Number"
						placeholder="Phone Number"
						name="phone"
						type="number"
						value={user.Phone}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="address card"
						iconPosition="left"
						label="Short Bio"
						placeholder="Short Bio"
						name="Short Bio"
						type="Short Bio"
						onChange={handleChange}
					/>
					<Button
						// disabled={disabled || loading}
						icon="signup"
						type="submit"
						color="orange"
						content="Save Changes"
					/>
					</Grid.Column>
					</Grid>
				</Segment>
			</Form>
		</>
	);
}

export default Account;
