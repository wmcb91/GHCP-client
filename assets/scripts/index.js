'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events');
const profileEvents = require('./profile/events');
const roundsEvents = require('./rounds/events');

$(() => {
  authEvents.addHandlers();
  profileEvents.addHandlers();
  roundsEvents.addHandlers();

  $('#user-welcome').hide();
  $('#sign-in-failure').hide();
  $('.dashboard').hide();
  $('.cancel').hide();
  $('#add-round').hide();
  $('.create-profile-modal').hide();
  $('#0').hide();
  $('#1').hide();
  $('#2').hide();
  $('#3').hide();
  $('#4').hide();
  $('#00').hide();
  $('#11').hide();
  $('#22').hide();
  $('#33').hide();
  $('#44').hide();
});
