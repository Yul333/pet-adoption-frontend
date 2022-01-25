import { Container } from "semantic-ui-react";
import "../App.css";
// import HeadContent from "./HeadContent";
import Header from "./Header";

function Layout({ children }) {
	return (
		<>
			{/* <HeadContent /> */}
			<link rel="stylesheet" href="../App.css" />
			<link
				rel="stylesheet"
				href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
			/>
			<title> Pets Adoption </title>
			<Header />
			<Container>{children}</Container>
		</>
	);
}

export default Layout;
