import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100000,
		image: "/images/backpack.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 2,
		name: "Product 2",
		price: 200000,
		image: "/images/backpack.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 3,
		name: "Product 3",
		price: 300000,
		image: "/images/backpack.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const email = localStorage.getItem("email");

const Products = () => {
	const [cart, setCart] = useState([]);

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

	const handleLogout = () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		window.location.href = "/";
	};

	return (
		<>
			<div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
				{email}
				<Button className="ml-5 bg-black" onClick={handleLogout}>
					Logout
				</Button>
			</div>
			<div className="flex justify-center py-5">
				<div className="w-4/6 flex flex-wrap">
					{products.map((product) => (
						<CardProduct key={product.id}>
							<CardProduct.Header image={product.image} />
							<CardProduct.Body name={product.name}>
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
							{cart.map((item) => {
								const product = products.find(
									(product) => product.id === item.id
								);
								return (
									<tr key={item.id}>
										<td>{product.name}</td>
										<td>
											Rp{" "}
											{product.price.toLocaleString("id-ID", {
												styles: "currency",
												currency: "IDR",
											})}
										</td>
										<td>{item.qty}</td>
										<td>
											Rp{" "}
											{(item.qty * product.price).toLocaleString("id-ID", {
												styles: "currency",
												currency: "IDR",
											})}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			<div className="mt-5 mb-5 flex justify-center">
				<Counter/>
			</div>
		</>
	);
};

export default Products;
