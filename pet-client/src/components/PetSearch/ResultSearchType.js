import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

const ResultSearchType = ({ typeList = [] }) => {
	return (
		<>
			<Container>
				{typeList.map((data, index) => {
					if (data) {
						return (
							<div key={data.Type}>
								<Message list
								style={{
									margin: "2px",
								}}>
									{" "}
									<Link to={`/Pet?_id=${data._id}`}>
										<span>{data.Type}</span>
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

export default ResultSearchType;
