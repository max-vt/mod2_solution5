(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['RegistrationService', 'ApiPath'];
function MyInfoController(RegistrationService, ApiPath) {
  var reg = this;
  reg.isSignedIn = RegistrationService.isSigned();
  reg.info = RegistrationService.getRegInfo();
  reg.baseUrl = ApiPath;
}

})();
