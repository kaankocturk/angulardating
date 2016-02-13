app.controller('homeCtrl', function($scope,$sessionStorage) {
  console.log('homeCtrl');
  $scope.isAuthenticated = function() {
  return $sessionStorage.email ? true : false;
};
});
