
app.controller('loginregister', function($scope, $state, $http, $sessionStorage) {
  $scope.register = function(user){


    // $auth.signup(user)
    // .then(function(response) {
    //    $state.go('login');
    //   // Redirect user here to login page or perhaps some other intermediate page
    //   // that requires email address verification before any other part of the site
    //   // can be accessed.
    // })
    // .catch(function(response) {
    //   console.log(response);
    //   // Handle errors here.
    // });
    $http({method: 'POST', url: '/auth/register', data:user}).then(function success(data){
      console.log(data);
      $state.go('login');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }
  $scope.login = function(user){
    $scope.$storage = $sessionStorage;
    $scope.$storage.email = user.email;
  //
  // $auth.login(user)
  //   .then(function(response) {
  //     // Redirect user here after a successful log in.
  //   })
  //   .catch(function(response) {
  //     // Handle errors here, such as displaying a notification
  //     // for invalid email and/or password.
  //   });
    $http({method: 'POST', url: '/auth/login', data: user}).then(function success(data){
      $state.go('createProfile');
      console.log(data);
      // window.location.replace('/profile');
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  }

});
