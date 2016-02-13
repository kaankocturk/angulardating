app.controller('users', function($scope, $http, $localStorage) {
  $scope.find = function(filter,interested){
    if(interested!=='both'){
      filter.gender = interested==='men' ? 'male' : 'female';
    }
    $http({method: 'PUT', url: '/users', data: {email:$localStorage.email, filter: filter}}).then(function success(data){
      console.log(data);
      $scope.list = data.data.map(function(user){
        return {name: user.name, age: user.age, gender: user.gender, eyecolor: user.eye, haircolor: user.hair, alcohol: user.alcohol, smoker: user.smoker};
      });
      $scope.pictures = data.data.map(function(user){
        return user.pp;
      });
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
