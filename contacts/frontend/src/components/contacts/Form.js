import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact } from "../../actions/contacts";

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const contact = { name, email, phone };

    this.props.addContact(contact);
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;
    console.log(this.state);
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add New Contact</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                onChange={this.onChange}
                value={phone}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-outline-primary btn-lg">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(Form);
