import React, { Component } from "react";

const TableHeader = () => (
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characters?.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>
          <button
            onClick={() => props.removePerson(index)}
            class="btn btn-primary"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { persons, removePerson } = this.props;
    return (
      <table class="table table-bordered">
        <TableHeader />
        <TableBody characters={persons} removePerson={removePerson} />
      </table>
    );
  }
}

export default Table;
