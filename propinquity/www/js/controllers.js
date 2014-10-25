angular.module('starter.controllers', [])

.controller('ChatCtrl', function($scope) {
	$scope.messages = [
		{ name:'goose', message:'hello'},
		{ name:'mav', message:'goodbye'},
	]

	$scope.newMessage = {
		text: ""
	}

	$scope.sendMessage = function() {
		$scope.messages.push({ name: 'vincey', message: this.newMessage.text })
	}
})

.controller('VideoCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
