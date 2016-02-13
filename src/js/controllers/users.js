app.controller('users', function($scope, $http, $sessionStorage) {
  $scope.find = function(filter,interested){
    if(interested!=='both'){
      filter.gender = interested==='men' ? 'male' : 'female';
    }
    $http({method: 'PUT', url: '/users', data: {email:$sessionStorage.email, filter: filter}}).then(function success(data){
      console.log(data);
      $scope.list = data.data.map(function(user){
        return {name: user.name, age: user.age, gender: user.gender, eyecolor: user.eye, haircolor: user.hair, alcohol: user.alcohol, smoker: user.smoker};
      });
      $scope.pictures = data.data.map(function(user){
        return user.pp;
      });
      $scope.ids = data.data.map(function(user){
        return user._id;
      });
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }

  $scope.wink = function(id){
    console.log(id);
    console.log($sessionStorage.email);
    $http({method: 'PUT', url: '/users/wink', data: {email:$sessionStorage.email, id:id}}).then(function success(data){
      console.log(data);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
});
