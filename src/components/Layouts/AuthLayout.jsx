import React from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
	return (
		<div className="flex justify-center min-h-screen items-center">
			<div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
				<div className="bg-white shadow-lg rounded-lg flex w-2/4 overflow-hidden">
					<div className="flex-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center p-12">
						<div className="text-white text-start">
							<h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
						</div>
					</div>
					<div className="w-full max-w-md p-8">
						<div className="mb-6">
							<h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
							<p className="text-gray-600 mb-6">
								Welcome back! Please login to your account.
							</p>
						</div>
						{children}
						<div className="mt-4 text-start">
							<Navigation type={type} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Navigation = ({ type }) => {
	if (type === "login") {
		return (
			<p className="text-sm text-gray-600">
				Don't have an account?{" "}
				<Link
					to="/register"
					className="text-blue-600 hover:text-blue-800 hover:underline"
				>
					Signup
				</Link>
			</p>
		);
	} else {
		return (
			<p className="text-sm text-gray-600">
				Already have an account?{" "}
				<Link
					to="/"
					className="text-blue-600 hover:text-blue-800 hover:underline"
				>
					Login
				</Link>
			</p>
		);
	}
};

export default AuthLayout;
