  'use strict';
//PROFILE EVENTS

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const authAPI = require('../auth/api');
const ui = require('./ui');
const authUI = require('../auth/ui');
const app = require('../app');

const onProfileClick = function (event) {
  event.preventDefault();
  let index = event.data.index;

  let data = app.user.profiles[index];

  ui.selectProfile(data);
};

const onNewProfileClick = function () {
  ui.showCreateProfile();
};

const onCreateProfile = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.user_id = app.user.id;
  api.createProfile(data)
    .done(ui.createProfileSuccess)
    .fail(ui.createProfileFailure);
  authAPI.getUser()
    .done(authUI.updateCurrentUser, ui.populateProfiles);
    // Add .fail later
};

const onChangeProfileButtonClick = function () {
  ui.populateProfiles();
  ui.showChangeProfile();
};

const addHandlers = function() {
  $('#change-profile-btn').on('click', onChangeProfileButtonClick);
  $('#new-profile').on('click', onNewProfileClick);
  $('#create-profile').on('submit', onCreateProfile);

  // how to get id of button sent as parameter?
  // Profile buttons
  $('#0').on('click', {index: 0}, onProfileClick);
  $('#1').on('click', {index: 1}, onProfileClick);
  $('#2').on('click', {index: 2}, onProfileClick);
  $('#3').on('click', {index: 3}, onProfileClick);
  $('#4').on('click', {index: 4}, onProfileClick);
};

module.exports = {
  addHandlers
};
