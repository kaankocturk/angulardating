app.controller('create', function($scope, $localStorage, $http, $state) {
  $scope.update = function(user){
    $http({method: 'POST', url: '/users/update', data: {user:$localStorage.user, data: user}}).then(function success(data){
      // $state.go('createProfile');
      console.log(data);
      // window.location.replace('/profile');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
