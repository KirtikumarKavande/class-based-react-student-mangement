import React, { Component } from "react";

export default class StudentDetails extends Component {
  render() {
   const{name,username,email}= this.props
    return (
      <>
        <td className="py-3 px-4 border-b">{name}</td>
        <td className="py-3 px-4 border-b">{username}</td>
        <td className="py-3 px-4 border-b">{email}</td>
      </>
    );
  }
}
