import React from "react";
import { Link } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

const ResultSearchType = ({ typeList = [] }) => {
	return (
		<>
			<Container>
				{typeList.map((data) => {
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
