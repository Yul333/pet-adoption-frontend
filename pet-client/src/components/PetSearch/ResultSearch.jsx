import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

const ResultSearch = ({ nameList = [] }) => {
	return (
		<>
			<Container>
				{nameList.map((data, index) => {
					if (data) {
						return (
							<div key={data.Name}>
								<Message list>
									{" "}
									<Link to={`/Pet?_id=${data._id}`}>
										<span>{data.Name}</span>
									</Link>{" "}
								</Message>
							</div>
						);
					}
					return null;
				})}
			</Container>
		</>
	);
};

export default ResultSearch;
