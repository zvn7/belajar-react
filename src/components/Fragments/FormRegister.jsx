import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
	return (
		<form action="">
            <InputForm name="fullname" label="Fullname" type="text" placeholder="Insert Name here" />
			<InputForm name="email" label="Email" type="email" placeholder="Email" />
			<InputForm
				name="password"
				label="Password"
				type="password"
				placeholder="********"
			/>
            <InputForm
				name="confirmPassword"
				label="Confirm Password"
				type="password"
				placeholder="********"
			/>
			<div className="flex items-center justify-between">
				<Button classname="bg-blue-500 hover:bg-blue-700 w-full">Register</Button>
			</div>
		</form>
	);
};

export default FormRegister;
