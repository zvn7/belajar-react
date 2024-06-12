import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-700">
			<h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
			<p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
			<p className="text-lg italic text-gray-500">
				{error.statusText || error.message}
			</p>
		</div>
	);
};

export default ErrorPage;
