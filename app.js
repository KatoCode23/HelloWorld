var app = angular.module('app', []);

app.controller('myController', function($scope){





$scope.videos = [
		
		{
			name: 'Chest WorkOut',
			video: 'videos/1.mov',
			exercise: [
					      {reps: '1. Warm Up/Stretch', color: 'white'},
		                  {reps: '2. 20 Jumping Jacks and 10 Box Jumps to engage the CNS', color: 'white'},
                          {reps: '3. Incline Barbell BenchPress 1 Activation Set of 20 Reps', color: 'white'},
                          {reps: '4. Incline Barbell BenchPress 6 Sets 6 Reps', color: 'white'}, 
                          {reps: '5. Incline Dumbbell Flys 6 Sets 6 Reps', color: 'white'}, 
                          {reps: '6. Close Grip Dumbbell (Dumbbells together with your thumbs facing toward you) Incline BenchPress and Push Up to Failure SuperSet 6 Sets 6-10 Reps', color: 'white'}, 
                          {reps: '7. Cable Flys with a 10 second squeeze at the end of your last rep! 6 sets 10 Reps', color: 'white'},
                          {reps: '8. Wide Grip Leaning Forward DIPS Control Up Control Down to Failure 6 Sets', color: 'white'},
                          {reps: '9. Steam and Shower! Go Home!', color: 'white'}

			          ]
		},
		{
			name: 'Leg WorkOut',
			video: 'videos/2.mov',
			exercise: [
					      {reps: '1. Warm Up/Stretch', color: 'white'},
		                  {reps: '2. Chin Ups 1 Set 10-15 Reps', color: 'white'},
                          {reps: '3. Barbell Squat 1 Warm Up Set with the Bar', color: 'white'},
                          {reps: '4. Barbell Squat Strength Test Put on as much as you think you can Squat! 1 Set 2 Reps', color: 'white'}, 
                          {reps: '5. Barbell Squat 2 Sets 4 Reps', color: 'white'}, 
                          {reps: '6. Barbell Squat 4 Sets 6 Reps', color: 'white'}, 
                          {reps: '7. Barbell Squat 2 Sets 6 Reps with a 2 second pause at the bottom of each Rep', color: 'white'},
                          {reps: '8. Barbell Lunge Squats 6 Sets 6 Reps Each Leg', color: 'white'},
                          {reps: '9. Barbell Alternating Forward Lunges 6 Sets 12 Reps Total', color: 'white'},
                          {reps: '10. Quadricep Extensions 4 Sets 6-10 Reps', color: 'white'},
                          {reps: '11. Laying Leg Curls 4 Sets 6-10 Reps', color: 'white'},
                          {reps: '12. Calf Raises 6 Sets to Failure', color: 'white'},
                          {reps: '13. Adductors and Abductors 3 Sets 10 Reps Each', color: 'white'},
                          {reps: '14. Steam, Shower, and Go Home!', color: 'white'},

			          ]
		},
		{
			name: 'Back WorkOut',
			video: 'videos/3.mov',
			exercise: [
					      {reps: '1. Warm Up/Stretch', color: 'white'},
		                  {reps: '2. Weighted Pull Ups 6 Sets Stop One Rep Prior to Failure', color: 'white'},
                          {reps: '3. Weighted Back Extensions 6 Sets 6-8 Reps', color: 'white'},
                          {reps: '4. Lat Pull Downs in Front of the Head 6 Sets 6-8 Reps', color: 'white'}, 
                          {reps: '5. Lat Pull Downs Close Grip with Palms facing your Body 6 Set 6-8 Reps', color: 'white'}, 
                          {reps: '6. One Arm Plank and Cable Side Raise Combo 6 Sets 6-10 Reps', color: 'white'}, 
                          {reps: '7. 15 Minutes of Abs! Challenge yourself!', color: 'white'},
                          {reps: '9. Steam and Shower! Go Home!', color: 'white'}

			          ]
		}
		
	];
                  
	




});