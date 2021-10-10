const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (params) => {
  let newGuest = {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    guests: params.guests,
  };
  const query = {email: params.email};
  return Rsvp.findOneAndUpdate(query, newGuest, { upsert: true })
};

module.exports.findRsvpAndUpdate = findRsvpAndUpdate;
