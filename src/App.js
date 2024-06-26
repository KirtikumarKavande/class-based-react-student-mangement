import React from "react";
import Input from "./Input";
import Student from "./Student";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      typedKeyWord:""
    }
    this.dataChangeFunc = this.dataChangeFunc.bind(this);

  }

  dataChangeFunc(data) {
    this.setState({typedKeyWord:data})
    console.log("parent comm data", data);
  }
  render() {
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="mb-6">
          <Input dataChangeFunc={this.dataChangeFunc} />
        </div>

        <Student typedKeyword={this.state.typedKeyWord} />
      </div>
    );
  }
}

export default App;
