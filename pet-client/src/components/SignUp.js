import {useState, useRef} from "react";
import { Button, Form, Icon, Message, Segment } from "semantic-ui-react";
import { signUp } from "../lib/api";

import catchErrors from "../utils/catchErrors";

// const INITIAL_USER = {
// 	FirstName: "",
// 	LastName: "",
// 	email: "",
// 	password: "",
// 	repeatedPass: "",
// 	phone: "",
// };

function SignUp() {
	// const [user, setUser] = useState(INITIAL_USER);
	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  
  const [password , setPassword] = useState('')
 const [repeatPass, setRepeatPass] = useState('')
  // const phoneRef = useRef();

	// React.useEffect(() => {
	// 	const isUser = Object.values(user).every((el) => Boolean(el));
	// 	isUser ? setDisabled(false) : setDisabled(true);
	// }, [user]);

	// function handleChange(event) {
	// 	const { name, value } = event.target;
	// 	setUser((prevState) => ({ ...prevState, [name]: value }));
	// }
  
  // if {user.password ===! user.repeatedPass
  //         				<Message negative>
	// 						<Message.Header>Password Doesn't Much! </Message.Header>
	// 					</Message>
  // }

	async function handleSubmit(event) {
		event.preventDefault();
    if (password !== repeatPass){
      setError ("Pass not match")
      return

    }
    const userInfo = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    }

		try {
			setLoading(true);
			setError("");
			const {user}  = await signUp(userInfo)
      console.log(user)
		
		} catch (error) {
			catchErrors(error, setError);
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
            onChange={(event)=>setFirstName(event.target.value)}
            
            />
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="Last Name"
						placeholder="Last Name"
						name="name"
            
            onChange={(event)=>setLastName(event.target.value)}
						
					/>
					<Form.Input
						fluid
						icon="envelope"
						iconPosition="left"
						label="Email"
						placeholder="Email"
						name="email"
            inputRef={emailRef}
						type="email"
					
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Password"
						placeholder="Password"
						name="password"
            inputRef={passwordRef}
						type="password"
					
					/>
				
          
      		
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Repeat Password"
						placeholder="Repeat Password"
						name="Repeat password"
            inputRef={repeatedPassRef}
						type="password"
				
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
            inputRef={phoneRef}
						type="number"
						
					/>
					<Button
		
						icon="signup"
						type="submit"
						color="orange"
						content="Signup"
					/>
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
