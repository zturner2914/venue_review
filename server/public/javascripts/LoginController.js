/**
 * Created by zturner29 on 10/23/15.
 */
app.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.username = "";
    $scope.password = "";

    $scope.sendFunction = function(){
        var data = {username: $scope.username, password: $scope.password};


        $http.post('/', data).then(function(response){
            console.log(response);
            $location.path(response.data);
        })
    }

}]);