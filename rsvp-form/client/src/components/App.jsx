import React from 'react';
import $ from 'jquery';
import axios from 'axios';

import RegisterForm from './RegisterForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addGuess = this.addGuess.bind(this);
  }

  addGuess(rsvp) {
    axios.post('/rsvps', rsvp, { headers: { 'Content-Type': 'application/json' }})
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className='main'>
        <RegisterForm addGuess={this.addGuess}/>
      </div>
    )
  }
}

export default App;
