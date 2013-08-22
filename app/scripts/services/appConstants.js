(function() {
	'use strict';

	angular.module('footballsqApp')
		.factory('appConstants', function() {
			var constants = {};
			constants.firebaseAuthUrl = "https://footballsq-auth.firebaseIO.com";
			
			return constants;
		});
})();