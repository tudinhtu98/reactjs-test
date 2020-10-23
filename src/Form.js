import React, { Component } from "react";

export default class Form extends Component {
  initialState = {
    name: "",
    email: "",
  };

  state = this.initialState;

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, email } = this.state;

    return (
      <form handleSubmit={this.handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChangeInput}
            value={name}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChangeInput}
            value={email}
            class="form-control"
          />
        </div>

        <input
          type="input"
          value="Submit"
          onClick={this.submitForm}
          class="btn btn-primary"
        />
      </form>
    );
  }
}
