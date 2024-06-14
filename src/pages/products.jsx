import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Elements/Navbar";

// const products = [
// 	{
// 		id: 1,
// 		name: "Product 1",
// 		price: 100000,
// 		image: "/images/backpack.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// 	{
// 		id: 2,
// 		name: "Product 2",
// 		price: 200000,
// 		image: "/images/backpack.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// 	{
// 		id: 3,
// 		name: "Product 3",
// 		price: 300000,
// 		image: "/images/backpack.jpg",
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// ];


const Products = () => {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem("cart")) || []);
	}, []);

	useEffect(() => {
		if (products.length > 0 && cart.length > 0) {
			const sum = cart.reduce((acc, item) => {
				const product = products.find((product) => product.id === item.id);
				return acc + product.price * item.qty;
			}, 0);

			setTotalPrice(sum);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart, products]);

	const handleAddtoCart = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(
				cart.map((item) =>
					item.id === id ? { ...item, qty: item.qty + 1 } : item
				)
			);
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};

	// useRef
	const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

	const handleAddtoCartRef = (id) => {
		cartRef.current = [...cartRef.current, { id, qty: 1 }];
		localStorage.setItem("cart", JSON.stringify(cartRef.current));
	};

	const totalPriceRef = useRef(null);

	useEffect(() => {
		if (cart.length > 0) {
			totalPriceRef.current.style.display = "table-row";
		} else {
			totalPriceRef.current.style.display = "none";
		}
	}, [cart]);

	useEffect(() => {
		getProducts((data) => {
			console.log(data);
			setProducts(data);
		});
	}, []);

	

	return (
		<>
			<Navbar />
			<div className="flex justify-center py-5 mt-16">
				<div className="w-4/6 flex flex-wrap">
					{products.length > 0 &&
						products.map((product) => (
							<CardProduct key={product.id}>
								<CardProduct.Header image={product.image} />
								<CardProduct.Body name={product.title}>
									{product.description}{" "}
								</CardProduct.Body>
								<CardProduct.Footer
									price={product.price}
									id={product.id}
									handleAddtoCart={handleAddtoCart}
								/>
							</CardProduct>
						))}
				</div>
				<div className="w-2/6">
					<h1 className="text-3xl font-bold text-blue-700 ml-5 mb-2">Cart</h1>
					<table className="text-left table-auto border-separate border-spacing-x-5">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{products.length > 0 &&
								cart.map((item) => {
									const product = products.find(
										(product) => product.id === item.id
									);
									return (
										<tr key={item.id}>
											<td>{product.title.substr(0, 20)}...</td>
											<td>
												${" "}
												{product.price.toLocaleString("id-ID", {
													styles: "currency",
													currency: "USD",
												})}
											</td>
											<td>{item.qty}</td>
											<td>
												${" "}
												{(item.qty * product.price).toLocaleString("id-ID", {
													styles: "currency",
													currency: "USD",
												})}
											</td>
										</tr>
									);
								})}
							<tr ref={totalPriceRef}>
								<td colSpan="3" className="font-bold">
									Total
								</td>
								<td className="font-bold">
									${" "}
									{totalPrice.toLocaleString("id-ID", {
										styles: "currency",
										currency: "USD",
									})}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <div className="mt-5 mb-5 flex justify-center">
				<Counter/>
			</div> */}
		</>
	);
};

export default Products;
