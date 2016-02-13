app.controller('navctrl', function($scope, $sessionStorage, $http, $state) {
    $scope.isAuthenticated = function() {
    return $sessionStorage.email ? true : false;
  };
  $scope.logout = function(){
    $sessionStorage.email = '';
    $http({method: 'POST', url: '/auth/logout'}).then(function success(data){
      console.log(data);
      $state.go('home');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
