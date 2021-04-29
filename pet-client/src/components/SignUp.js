import React from "react";
import {Button, Form, Icon, Message,Segment} from 'semantic-ui-react';
// import Link from "next/link";
import catchErrors from "../utils/catchErrors";

const INITIAL_USER = {
    name: "",
    email: "",
    password: ""
  };

function SignUp(){
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true);
      }, [user]);

    function handleChange(event) {
        const { name, value } = event.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
      }

      async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          setLoading(true);
          setError("");
          console.log(user);
          // make request to signup user
        } catch (error) {
          catchErrors(error, setError);
        } finally {
          setLoading(false);
        }
      }
    
    return <>

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
            label="Name"
            placeholder="Name"
            name="name"
            value={user.name}
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
            <Button
            disabled={disabled || loading}
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
}

    export default SignUp