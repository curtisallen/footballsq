(function() {
	'use strict';

	angular.module('footballsqApp')
		.factory('firebaseSecurity', function($log, appConstants) {
			var fbAuth = new Firebase(appConstants.firebaseAuthUrl);
			var auth = new FirebaseSimpleLogin(fbAuth, function(error, user) {
				if(error) {
					$log.error("Error connecting firebase auth");
				}
			});
		});
})();