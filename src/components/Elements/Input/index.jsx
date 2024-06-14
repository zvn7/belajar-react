import React, { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({ name, label, type, placeholder }, ref) => {
	return (
		<div className="mb-6">
			<Label htmlFor={name}>{label}</Label>
			<Input name={name} type={type} placeholder={placeholder} ref={ref} />
		</div>
	);
});

export default InputForm;
