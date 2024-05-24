import React from "react";
import Input from "./Input";
import Student from "./Student";
class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="mb-6">
          <Input />
        </div>

        <Student/>
      </div>
    );
  }
}

export default App;
