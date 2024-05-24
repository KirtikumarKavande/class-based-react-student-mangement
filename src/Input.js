import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedWord: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      typedWord: e.target.value,
    });
  }
  componentDidUpdate(props, state) {
    if (state.typedWord !== this.state.typedWord) {
        this.props.dataChangeFunc(this.state.typedWord)
    }

  }

  render() {
    return (
      <input
        onChange={this.handleInput}
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
}
