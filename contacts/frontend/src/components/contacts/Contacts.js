import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContacts, deleteContact } from "../../actions/contacts";

connect;

class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <Fragment>
        <h2>My Contacts</h2>
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cellphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    onClick={this.props.deleteContact.bind(this, contact.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
});

export default connect(
  mapStateToProps,
  { getContacts, deleteContact }
)(Contacts);
