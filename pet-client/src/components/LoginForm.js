import React, { useContext } from "react";
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
import { login } from "../lib/api";

const INITIAL_USER = {
	email: "",
	password: "",
};

function LoginForm() {
	const { setUserToken } = useContext(setUserTokenContext);

	const [userInfo, setUserInfo] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const isUser = Object.values(userInfo).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [userInfo]);

	function handleChange(event) {
		const { name, value } = event.target;
		setUserInfo((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setError("");
		setLoading(true);

		if (!userInfo.email || !userInfo.password) {
			setError("No email and/or password");

			return;
		}

		try {
			const { token, user } = await login(userInfo);
			setUserToken(token, user);
			window.location.replace("http://localhost:3000/");

			setOpen(false);
		} catch (error) {
			setError("Email and password do not match!");
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<Modal
				size="huge"
				centered={true}
				style={{ position: "relative" }}
				as={Form}
				onSubmit={(e) => handleSubmit(e)}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={
					<Menu.Item>
						<Icon name="sign in" />
						Login
					</Menu.Item>
				}
			>
				<Modal.Header>Login!</Modal.Header>
				<Modal.Content>
					<Message
						attached
						icon="privacy"
						header="Welcome Back!"
						content="Log in with email and password"
						color="blue"
					/>

					{error && <div>{error}</div>}
					<Segment>
						<Form.Input
							fluid
							icon="envelope"
							iconPosition="left"
							label="Email"
							placeholder="Email"
							name="email"
							type="email"
							value={userInfo.email}
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
							value={userInfo.password}
							onChange={handleChange}
						/>
					</Segment>

					<Message attached="bottom" warning>
						<Icon name="help" />
						New user?{" "}
						<a href="/SignUp">
							<h2>Sign up here</h2>
						</a>{" "}
						instead.
					</Message>
				</Modal.Content>
				<Modal.Actions>
					<Button
						content="Sign me in!"
						type="submit"
						labelPosition="center"
						icon="sign in"
						positive
					/>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default LoginForm;
