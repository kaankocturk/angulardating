app.controller('create', function($scope, $sessionStorage, $http, $state) {
  $scope.update = function(user){
    $http({method: 'POST', url: '/users/update', data: {email:$sessionStorage.email, data: user}}).then(function success(data){
      $state.go('profile');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
