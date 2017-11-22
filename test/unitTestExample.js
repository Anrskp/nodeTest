'use strict';

const User = require('../models/user');
const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;

var testUser = {
  username : "testUserUnit",
  email : "test@test.test",
  password : "testUnit"
};

describe('User model tests', function() {
  it('Should add a new user' , function() {


    User.addUser(testUser, err) => {
      console.log(err)
    });

  });

});
