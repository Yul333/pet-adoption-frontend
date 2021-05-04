import { Helmet } from "react-helmet";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import HeadContent from "./HeadContent";
import '../App.css'




function Layout({ children }) {
	return (
		<>
			{/* <Helmet> */}
				<HeadContent />
				<link rel="stylesheet"
				href="../App.css"/>
				{/* <link rel="stylesheet" type="text/css" href="../static/styles.css" /> */}{" "}
				<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
				<link
					rel="stylesheet"
					href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
					
				
				/>
				<title> Pets Adoption </title>{" "}
			{/* </Helmet>{" "} */}
			<Header />
			<Container

fluid
				// text
				// style={{
				// 	paddingTop: "3em",
				// }}
			>
				{children}
			</Container>
		</>
	);
}

export default Layout;
