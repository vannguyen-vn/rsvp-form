const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (params) => {
  let newGuest = new Rsvp({
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    guests: params.guests,
  });
  return newGuest.save();
};
module.exports.findRsvpAndUpdate = findRsvpAndUpdate;
