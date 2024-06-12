import React from "react";

const Checkbox = ({ name, label, onChange }) => {
	return (
		<div className="flex items-center">
			<input
				type="checkbox"
				id={name}
				name={name}
				onChange={onChange}
				className="form-checkbox text-blue-600"
			/>
			<label htmlFor={name} className="ml-2 text-gray-700">
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
