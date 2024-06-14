import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import Checkbox from "../Elements/Input/Checkbox";

const FormLogin = () => {
	const handleLogin = (event) => {
		event.preventDefault();
		localStorage.setItem("email", event.target.email.value);
		localStorage.setItem("password", event.target.password.value);
		window.location.href = "/products";
	};

	const emailRef = useRef();
	useEffect(() => {
		emailRef.current.focus();
	}, []);

	return (
		<form onSubmit={handleLogin}>
			<InputForm
				name="email"
				label="Email"
				type="email"
				placeholder="Email"
				ref={emailRef}
			/>
			<InputForm
				name="password"
				label="Password"
				type="password"
				placeholder="Password"
			/>
			<div className="flex items-center justify-between mt-4">
				<Checkbox name="rememberMe" label="Remember Me" />
				<a
					href="#"
					className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
				>
					Forgot Password?
				</a>
			</div>
			<div className="flex items-center justify-between mt-4">
				<Button
					classname="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
					type="submit"
				>
					Login
				</Button>
			</div>
		</form>
	);
};

export default FormLogin;
