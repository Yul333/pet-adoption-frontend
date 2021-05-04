import { useState } from "react";
import { Button, Form, Icon, Message, Segment } from "semantic-ui-react";
import { signUp } from "../lib/api";

// import catchErrors from "../utils/catchErrors";

function SignUp() {
	// const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPass, setRepeatPass] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		if (password !== repeatPass) {
			setError(
				<Message negative>
					<Message.Header>Password Doesn't Much! </Message.Header>
				</Message>
			);
			return;
		}
		const userInfo = {
			firstName,
			lastName,
			email,
			password,
            // repeatPass,
			phoneNumber,
		};

		try {
			setLoading(true);
			setError("");
			const user  = await signUp(userInfo);
			console.log(user);
		} catch (error) {
			 setError("Something wrong...");
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<Message
				attached
				icon="settings"
				header="Get Started!"
				content="Create a new account"
				color="teal"
			/>
			<Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
				<Message error header="Oops!" content={error} />
				<Segment>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="First Name"
						placeholder="First Name"
						name="name"
						onChange={(event) => setFirstName(event.target.value)}
					/>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="Last Name"
						placeholder="Last Name"
						name="name"
						onChange={(event) => setLastName(event.target.value)}
					/>
					<Form.Input
						fluid
						icon="envelope"
						iconPosition="left"
						label="Email"
						placeholder="Email"
						name="email"
						type="email"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Password"
						placeholder="Password"
						name="password"
						type="password"
						onChange={(event) => setPassword(event.target.value)}
					/>

					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Repeat Password"
						placeholder="Repeat Password"
						name="Repeat password"
						type="password"
						onChange={(event) => setRepeatPass(event.target.value)}
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
						onChange={(event) => setPhoneNumber(event.target.value)}
					/>
					<Button icon="signup" type="submit" color="orange" content="Signup" />
				</Segment>
			</Form>
			<Message attached="bottom" warning>
				<Icon name="help" />
				Existing user?{" "}
				<a href="/login">
					<h2>Log in here</h2>
				</a>{" "}
				instead.
			</Message>
		</>
	);
}

export default SignUp;
