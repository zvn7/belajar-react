import Button from "../Elements/Button";

const CardProduct = (props) => {
	const { children } = props;
	return (
		<div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
			{children}
		</div>
	);
};

const Header = ({ image }) => {
	return (
		<a href="#">
			<img className="p-8 rounded-t-lg" src={image} alt="product image" />
		</a>
	);
};

const Body = ({ children, name }) => {
	return (
		<div className="px-5 pb-5 h-full">
			<a href="#">
				<h5 className="text-xl font-semibold tracking-tight text-white">
					{name}
				</h5>
				<p className="text-m text-white">{children}</p>
			</a>
		</div>
	);
};

const Footer = (props) => {
	const {price, id, handleAddtoCart} = props
	return (
		<div className="flex items-center justify-between mt-4 px-5 pb-5">
			<span className="text-xl font-bold text-white">
				Rp{" "}
				{price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
			</span>
			<Button
				classname="bg-blue-600"
				onClick={() => handleAddtoCart(id)}
			>
				Add to cart
			</Button>
		</div>
	);
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
