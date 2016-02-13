app.controller('create', function($scope, $localStorage, $http, $state) {
  $scope.update = function(user){
    $http({method: 'POST', url: '/users/update', data: {email:$localStorage.email, data: user}}).then(function success(data){
      $state.go('profile');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
