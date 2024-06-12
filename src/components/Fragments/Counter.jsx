import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		console.log("constructor");
	}

	componentDidMount() {
		this.setState({ count: 1 });
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
		if (this.state.count === 10) {
			this.setState({ count: 0 });
		}
	}

	render() {
		return (
			<div className="flex items-center justify-center">
				<h1 className="text-3xl font-bold mr-3">{this.state.count}</h1>
				<button
					className="bg-black text-white font-bold py-2 px-4 rounded p-3"
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>
					+
				</button>
				{console.log("render")}
			</div>
		);
	}
}

export default Counter;
