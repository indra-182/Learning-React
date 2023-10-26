import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // componentDidMount
  // dieksekusi pada saat mounting / saat pembuatan komponen tsb
  // biasanya digunakan untuk ambil data via api
  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componentDidMount");
  }

  // componentDidUpdate
  // melihat perubahan yang terjadi pada komponen ts
  // butuh sebuah kondisi

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
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
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
