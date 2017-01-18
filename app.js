var app = angular.module('app', []);

app.controller('myController', function($scope){





$scope.videos = [
		
		{
			name: 'Chest WorkOut',
			video: 'videos/1.mov'
		},
		{
			name: 'Leg WorkOut',
			video: 'videos/2.mov'
		},
		{
			name: 'Back WorkOut',
			video: 'videos/3.mov'
		}
		


];
});