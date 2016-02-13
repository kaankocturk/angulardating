app.controller('profile', function($scope, $http, $sessionStorage) {
  console.log('profile page');
  $http({method: 'GET', url: '/users/current'+$sessionStorage.email}).then(function success(data){
    $scope.user = {name: data.data.name, age: data.data.age, gender: data.data.gender, eyecolor: data.data.eye, haircolor: data.data.hair, alcohol: data.data.alcohol, smoker: data.data.smoker};
    $scope.pp = data.data.pp
    $scope.winks = data.data.winks
    console.log('winks',data.data.winks);
  },
  function err(err){
    console.log('Error:', err, 'error');
  });
});
