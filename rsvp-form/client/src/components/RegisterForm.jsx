import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      guests: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    var currTarget = event.target.name;
    this.setState({ [currTarget]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const inputFeilds = document.querySelectorAll("input");
    const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");
    let email = this.state.email;
    var mailformat = email.match(/local@domain/);
    if (validInputs.length < 4) {
      alert('You need to fill out all information!');
    } else if (mailformat === null) {
      alert('You have entered an invalid email address!');
    } else {
      this.props.addGuess(this.state);
    }
  }

  render() {
    return (
      <div className="invitation-form">
        <form onSubmit={this.handleSubmit} noValidate>
          <h2>Invitation to Our Party</h2>
          <label>First Name:
            <input
              type="text"
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>Last Name:
            <input
              type="text"
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>Email Address:
            <input
              className = "email"
              type="text"
              name='email'
              placeholder = 'local@domain.com'
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>Number of Guests:
            <input
              type="text"
              name='guests'
              required
              value={this.state.guests}
              onChange={this.handleChange}
            ></input>
          </label>
          <button>REGISTER</button>
        </form >
      </div>
    )
  }
}

export default RegisterForm;