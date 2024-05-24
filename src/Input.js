import React, { Component } from 'react'

export default class Input extends Component {
  
  render() {
    return (
        <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )
  }
}
