import React from 'react';
import $ from 'jquery';
import RegisterForm from './RegisterForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='main'>
        <RegisterForm />
      </div>
    )
  }
}

export default App;
