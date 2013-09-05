'use strict';

angular.module('footballsqApp')
  .controller('MainCtrl', function ($scope, $log, angularFireAuth) {
    var ref = new Firebase("https://footballsq.firebaseio.com/");
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

    $scope.login = function() {
    	$log.log("logging in");
    	angularFireAuth.login("password"); 
    };

    $scope.createUser = function() {
    	$log.log("create user");
    	angularFireAuth.createUser("test@example.com", "yourmom", function(err, login) {
    		$log.log("Got this error: " + angular.toJson(err));
    		$log.log("Got this login: " + angular.toJson(login));
    	}, false)
    }
  });
