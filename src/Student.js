import React, { Component } from "react";
import StudentDetails from "./StudentDetails";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {

        this.setState({ data: data });
      });
  }



  render() {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 border-b-2 border-blue-600">name</th>
              <th className="py-3 px-4 border-b-2 border-blue-600">Username</th>
              <th className="py-3 px-4 border-b-2 border-blue-600">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => (
              <tr>
                <StudentDetails
                  name={item.name}
                  username={item.username}
                  email={item.email}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
