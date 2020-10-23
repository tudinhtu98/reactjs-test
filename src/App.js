import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
// import axios from "axios";

class App extends Component {
  state = {};

  // componentDidMount() {
  //   axios
  //     // .get("https://tudinhtu98-nodejs-typescript-test.glitch.me")
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       let persons = res.data;
  //       persons = persons.map((p) => {
  //         return {
  //           name: p.name,
  //           email: p.email,
  //         };
  //       });
  //       this.setState({ persons });
  //     });
  // }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let persons = res.map((p) => {
          return {
            name: p.name,
            email: p.email,
          };
        });
        this.setState({ persons });
      });
  }

  removePerson = (index) => {
    const { persons } = this.state;

    this.setState({
      persons: persons.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (person) => {
    this.setState({ persons: [...this.state.persons, person] });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="container">
        <Table persons={persons} removePerson={this.removePerson} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
