(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'RegistrationService'];
function SignUpController(MenuService, RegistrationService) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
    MenuService.getItem(reg.user.dish).then(function (response) {
    	RegistrationService.register(reg.user, response.data);
      	reg.info = "Your information has been saved";
    }).catch(function (error) {
		reg.info = "No such menu number exists";
    })
    
  };
}

})();
