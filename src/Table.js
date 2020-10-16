import React, { Component } from "react";
import axios from "axios";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Remove</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  // return (
  //   <tbody>
  //     <tr key="1">
  //       <td>a</td>
  //       <td>b</td>
  //       <td>
  //         <button onClick={() => props.removePerson(0)}>Delete</button>
  //       </td>
  //     </tr>
  //   </tbody>
  // );
  const rows = props.characters?.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>
          <button onClick={() => props.removePerson(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  state = {};

  componentDidMount() {
    axios
      // .get("https://tudinhtu98-nodejs-typescript-test.glitch.me")
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const persons = res.data;
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

  render() {
    const { persons } = this.state;
    console.log("this.state", this.state);
    return (
      <table border="1" align="center" height="200px" width="900px">
        <TableHeader />
        <TableBody characters={persons} removePerson={this.removePerson} />
      </table>
    );
  }
}

export default Table;
