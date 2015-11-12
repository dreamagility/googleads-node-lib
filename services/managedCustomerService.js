/*

API:
https://developers.google.com/adwords/api/docs/reference/v201506
/ManagedCustomerService

*/

var
  _ = require('lodash'),
  async = require('async'),
  soap = require('soap');

var AdWordsService = require('./adWordsService');
var types = require('../types/managedCustomer');
var links = require('../types/managedCustomerLink');

function Service(options) {
  var self = this;
  AdWordsService.call(self, options);
  self.Collection = types.collection;
  self.Model = types.model;
  self.ManagedCustomerLinkCollection = links.collection;
  self.ManagedCustomerLink = links.model;

  self.formGetRequest = function(selector) {
    return {serviceSelector: selector.toJSON()};
  };

  self.mutateAdd = function(clientCustomerId, operand, done) {
    // why the cm?
    var options = {
      clientCustomerId: clientCustomerId,
      mutateMethod: 'mutate',
      operations: [{'cm:operator': 'ADD', operand: operand.toJSON()}]
    };

    self.mutate(options, done);
  };

  self.mutateLinkSet = function(clientCustomerId, operand, done) {
    // why the cm?
    var options = {
      clientCustomerId: clientCustomerId,
      mutateMethod: 'mutateLink',
      operations: [{'cm:operator': 'SET', operand: operand.toJSON()}],
      parseMethod: self.parseMutateLinkRval
    };

    self.mutate(options, done);
  };

  self.parseGetRval = function(response) {
    return {
      totalNumEntries: response.rval.totalNumEntries,
      collection: new self.Collection(response.rval.entries),
      links: new self.managedCustomerLinkCollection(response.rval.links)
    };
  };

  self.parseMutateLinkRval = function(response) {
    if (self.options.validateOnly) {
      return {
        partialFailureErrors: null,
        collection: new self.Collection([])
      };
    } else {
      if (response.rval) {
        return {
          partialFailureErrors: response.rval.partialFailureErrors,
          collection: new self.Collection(response.rval.links)
        };
      } else {
        return {};
      }
    }
  };

  self.selectable = [
    'AccountLabels',
    'CanManageClients',
    'CompanyName',
    'CurrencyCode',
    'CustomerId',
    'DateTimeZone',
    'Name',
    'TestAccount'
  ];

  self.xmlns = 'https://adwords.google.com/api/adwords/mcm/v201506';
  self.wsdlUrl = self.xmlns + '/ManagedCustomerService?wsdl';
}

Service.prototype = _.create(AdWordsService.prototype, {
  'constructor': Service
});

module.exports = (Service);
