(function () {
	'use strict';

	angular
	   .module('thinkster.config')
	   .config(config);

	config.$inject = ['$locationProvider'];
	//Disable hash routing, enable HTML5 routing
	function config($locationProvider){
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	}

})();