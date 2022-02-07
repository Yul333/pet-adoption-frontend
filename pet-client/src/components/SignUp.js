import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	Button,
	Form,
	Icon,
	Menu,
	Message,
	Modal,
	Segment,
} from "semantic-ui-react";
import { setUserTokenContext } from "../context/UserAuth";
import { signUp } from "../lib/api";

function SignUp() {
	const [open, setOpen] = useState(false);//opens modal
	const [error, setError] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPass, setRepeatPass] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const history = useHistory();
	const { setUserToken } = useContext(setUserTokenContext);

console.log(history)


	async function handleSubmit(event) {
		event.preventDefault();

		if (password !== repeatPass) {
			setError("Password Doesn't Match!");
			return;
		}
		const userInfo = {
			firstName,
			lastName,
			email,
			password,
			repeatPass,
			phoneNumber,
		};

		try {
			console.log("start loading");

			setError("");
			console.log("start sending");
			const { token, user } = await signUp(userInfo);
			setUserToken(token, user);
			history.push("/");
			setOpen(false);

			console.log("finish sending");
			console.log(user);
			console.log(token);
		} catch (error) {
			setError("Something wrong...");
		}
	}

	return (
		<>
			<Modal
				as={Form}
				onSubmit={(e) => handleSubmit(e)}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={
					<Menu.Item header>
						<Icon name="signup" />
						Sign Up
					</Menu.Item>
				}
			>
				<Modal.Header>Sign up!</Modal.Header>
				<Modal.Content>
					<Message
						attached
						icon="settings"
						header="Get Started!"
						content="Create a new account"
						color="teal"
					/>
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
						/>{" "}
						<Message error header="Oops!" content={"ppp"} />
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
							name="repeatPass"
							type="password"
							onChange={(event) => setRepeatPass(event.target.value)}
						/>
						<Form.Input
							fluid
							control="input"
							icon="phone square"
							iconPosition="left"
							label="Phone Number"
							placeholder="Phone Number"
							name="phone"
							type="number"
							onChange={(event) => setPhoneNumber(event.target.value)}
						/>
					</Segment>
				</Modal.Content>
				<Modal.Actions>
					<Button
						content="Sign me up!"
						type="submit"
						labelPosition="center"
						icon="signup"
						positive
					/>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default SignUp;
