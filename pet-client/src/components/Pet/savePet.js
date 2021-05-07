import React, { useContext } from "react";
import { Input } from "semantic-ui-react";
// import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../lib/api";
// import catchErrors from "../../utils/catchErrors";
// import cookie from "js-cookie";

import { setUserTokenContext } from "../context/UserAuth";

function AddProductToCart({ user, productId }) {
//   const [quantity, setQuantity] = React.useState(1);
const {token, user: userFromCtx } = useContext(setUserTokenContext);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
//   const router = useRouter();

  React.useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `http://localhost:5050/api/pets/myPets/${user._id}`;
      const payload = {  productId };
    //   const token = cookie.get("token");
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
    //   catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Input
      type="number"
      min="1"
    //   placeholder="Quantity"
    //   value={quantity}
      onChange={event => (event.target.value)}
      action={
        user && success
          ? {
              color: "blue",
              content: "Item Added!",
              icon: "plus cart",
              disabled: true
            }
          : user
          ? {
              color: "orange",
              content: "Add to Cart",
              icon: "plus cart",
              loading,
              disabled: loading,
              onClick: handleAddProductToCart
            }
        //   : {
        //       color: "blue",
        //       content: "Sign Up To Purchase",
        //       icon: "signup",
        //       onClick: () => router.push("/signup")
        //     }
      }
    />
  );
}

export default AddProductToCart;
