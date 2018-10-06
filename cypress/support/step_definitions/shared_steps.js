'use strict'

const { Given } = require('cucumber')

Given('I am on the {string} page', function (pageString) {
  if (pageString === 'home') {
    pageString = ''
  }
  let pageUrl = '/' + pageString
  cy.visit(pageUrl)
})
