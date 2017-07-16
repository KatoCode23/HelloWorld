var app = angular.module('app', []);

app.controller('myController', function($scope){

$scope.videos = [
		{
			name: 'Work',
			video: 'videos/work.mov'
    },
		{
			name: 'Kato',
			video: 'videos/KatoFitnessColor.mov'
		},
		{
			name: 'Fitness',
			video: 'videos/KatoFitnessBW.mov'
		}

];






});
