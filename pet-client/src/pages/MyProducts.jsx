// import { useEffect, useState } from "react";
// import { useAuth } from "../context/auth";
// import { getMyProducts } from "../lib/api";
// import { Link } from "react-router-dom";

// const MyProducts = () => {
//   const auth = useAuth();
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     getMyProducts(auth.token).then(data => {
//       setProducts(data.products)
//     });
//   }, [auth.token]);
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map(product =>
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`}>{product.name}</Link>
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default MyProducts
