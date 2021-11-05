# RSVP Form - Full Stack
<p align="center">
<img src="https://github.com/vannguyen-vn/rsvp-form/blob/master/rsvp-form/client/dist/images/register.jpg" width="350">
</p>

Build a simple full-stack RSVP form to allow users to respond to their invitation to *_The Party*.

( *_The Party* is private.)

## Requirements:

##### Client:

- Create a form with React that:
  - Takes in the following input:
    - First Name
    - Last Name
    - Email Address 
    - Number of Guests
  - Requires all input fields to have a value before a submission can be made.
  - Performs input validation on the email address.
    (Email must be of form `local@domain`.)
  - Upon submission, sends the RSVP data to your Express server.

##### Server:
- Create an endpoint called `/rsvps` in your Express server with a request handler that:
  - Invokes a database controller function that updates or creates a new document in your MongoDB collection, `rsvps`.

##### Database:
- Implement a database controller function that will update an existing rsvp record if a matching one exists or create one if it does not, in the file `/database/controllers/rsvp.js`.

## Available Resources:

- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [NPM](https://www.npmjs.com/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)
- [Express Documentation](https://expressjs.com/en/api.html)
- [Mongoose Documentation](http://mongoosejs.com/docs/api.html)

## Installation
npm is the package management system for this project.

Use npm install to install all dependencies.

To start the server, use npm run start.
To build, use npm run react-dev.
