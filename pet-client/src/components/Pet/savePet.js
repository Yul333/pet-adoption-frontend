// import axios from "axios";
// import React, { useContext } from "react";
// import { Input } from "semantic-ui-react";
// import { setUserTokenContext } from "../../context/UserAuth";

// function SavePet({ user, productId }) {
// 	const { token, user: userFromCtx } = useContext(setUserTokenContext);
// 	const [loading, setLoading] = React.useState(false);
// 	const [success, setSuccess] = React.useState(false);

// 	React.useEffect(() => {
// 		let timeout;
// 		if (success) {
// 			timeout = setTimeout(() => setSuccess(false), 3000);
// 		}
// 		return () => {
// 			clearTimeout(timeout);
// 		};
// 	}, [success]);

// 	async function handleSavePet() {
// 		try {
// 			setLoading(true);
// 			const url = `http://localhost:5050/api/pets/myPets/${user._id}`;
// 			const payload = { productId };

// 			const headers = { headers: { Authorization: token } };
// 			await axios.put(url, payload, headers);
// 			setSuccess(true);
// 		} catch (error) {
// 		} finally {
// 			setLoading(false);
// 		}
// 	}

// 	return (
// 		<Input
// 			type="number"
// 			min="1"
// 			onChange={(event) => event.target.value}
// 			action={
// 				user && success
// 					? {
// 							color: "blue",
// 							content: "Item Added!",
// 							icon: "plus cart",
// 							disabled: true,
// 					  }
// 					: user
// 					? {
// 							color: "orange",
// 							content: "Add to Cart",
// 							icon: "plus cart",
// 							loading,
// 							disabled: loading,
// 							onClick: handleSavePet,
// 					  }
// 					: {
// 							color: "blue",
// 							content: "Sign Up To Purchase",
// 							icon: "signup",
// 					  }
// 			}
// 		/>
// 	);
// }

// export default SavePet;
