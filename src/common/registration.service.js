(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

function RegistrationService() {
  var service = this;
  service.signed = false;

  service.register = function (user, dish) {
    service.signed = true;
    service.user = user;
    service.dish = dish;
    console.log('registered');
  };

  service.isSigned = function() {
    return service.signed;
  }

  service.getRegInfo = function() {
    return {user: service.user, dish: service.dish};
  }

}


})();
