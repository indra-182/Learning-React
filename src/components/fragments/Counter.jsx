import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const addNumber = () => {
      this.setState({ count: this.state.count + 1 });
    };

    return (
      <div className="flex items-center justify-center mt-5">
        <button className="bg-black text-white p-3" onClick={addNumber}>
          +
        </button>
        <h1 className="ml-5">{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
