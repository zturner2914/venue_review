
app.controller('HomeController', function($scope, $http, $timeout, mapboxService, $mdDialog) {

 $scope.userReviews;


    mapboxService.init({accessToken:'pk.eyJ1IjoienR1cm5lcjI5IiwiYSI6ImNpZzc0NGphejBleXJ0Ymx6em1yMTUydTQifQ.bdX-UnRHYm7uFZf2tOhudA'});
    $timeout(function (){
        //var map = mapboxService.getMapInstances()[0];
    }, 100);


    $http.get('/getMarkers').success(function(response) {
    $scope.venues = response;
    console.log($scope.venues);

});


    $scope.showAdvanced = function(ev,venues){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'views/reviewForm.html',
            parent:angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            resolve:{
                venues: function() {
                    return venues;
                }
            }
        })
    };

    //$scope.getData = function(ev, venues){
    //   $mdDialog.show({
    //       controller: DialogController,
    //       templateUrl: 'views/reviewPage.html',
    //       parent: angular.element(document.body),
    //       targetEvent: ev,
    //       clickOutsideToClose: true,
    //       resolve: {
    //           venues: function () {
    //               return venues;
    //           }
    //       }
    //   })
    //};

    function DialogController($scope, venues, $http) {

        console.log(venues);
        $scope.rate = 0;
        $scope.max = 5;
        $scope.something = "something";
        $scope.userReviews = "";
        $scope.rate1 = 0;
        $scope.rate2 = 0;



        $scope.hoveringStaff = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
            console.log($scope.overStar);
        };

        $scope.hoveringVenue = function (value) {
            $scope.overVenue = value;
            $scope.percent = 100 * (value / $scope.max);
            console.log($scope.overStar);
        };

        $scope.hoveringSound = function (value) {
            $scope.overSound = value;
            $scope.percent = 100 * (value / $scope.max);
            console.log($scope.overStar);
        };



        $scope.sendReview = function (){
            var DataToSend = {
                show:$scope.show,
                date: $scope.date,
                overStar: $scope.rate,
                drink: $scope.drink,
                nearby: $scope.nearby,
                comments: $scope.comments,
                venueDetails: venues

            };
            console.log(DataToSend);
            $http.post('/addReview/addReview', DataToSend).then(function(response){
                console.log(response);
                console.log(response.config.data);
                $scope.userReviews = response.config.data;
            });
        }
    }


});

//function DialogController($scope, venues, $http) {
//
//    console.log(venues);
//    $scope.rate = 0;
//    $scope.max = 5;
//
//
//    $scope.hoveringStaff = function (value) {
//        $scope.overStar = value;
//        $scope.percent = 100 * (value / $scope.max);
//        console.log($scope.overStar);
//    };
//
//    $scope.sendReview = function (){
//        var DataToSend = {
//            show:$scope.show,
//            date: $scope.date,
//            overStar: $scope.rate,
//            drink: $scope.drink,
//            nearby: $scope.nearby,
//            comments: $scope.comments,
//            venueDetails: venues
//
//        };
//        console.log(DataToSend);
//        $http.post('/addReview/addReview', DataToSend).then(function(response){
//            console.log(response);
//            console.log(response.config.data);
//            $scope.userReviews = response.config.data;
//        });
//    }
//}

    //$scope.sendReview = function(){
    //
    //    var reviewData = {
    //        name:$scope.name,
    //    }
    //}




//$scope.venues = [
//    {
//        id: 01,
//        name: 'First Ave',
//        coords: {
//            lat: 44.980446,
//            lng: -93.274369
//        },
//        info: 'basic info goes here',
//        image: 'image goes here'
//    },
//    {
//        id: 02,
//        name: 'Dakota Jazz Club',
//        coords: {
//            lat: 44.973731,
//            lng: -93.275239
//        },
//        info: 'basic info goes here',
//        image: 'image goes here'
//    },
//    {
//        id:03,
//        name: 'The Cabooze',
//        coords: {
//            lat: 44.963384,
//            lng: -93.246802
//        },
//        info: 'basic info goes here',
//        image: 'image goes here'
//
//    },
//    {
//        id: 04,
//        name: 'Varisty Theater',
//        coords: {
//            lat: 44.980567,
//            lng: -93.236857
//        },
//        info: 'basic info goes here',
//        image: 'image goes here'
//    },
//    {
//        id: 05,
//        name: 'Fine Line Music Cafe',
//        coords: {
//            lat: 44.981936,
//            lng: -93.271641
//        },
//        info: 'basic info goes here',
//        image: 'image goes here'
//    }
//];


////$http.get("https://a.tiles.mapbox.com/v4/zturner29.cig744i180eoqtama9b08yil5/features.json?access_token=pk.eyJ1IjoienR1cm5lcjI5IiwiYSI6ImNpZzc0NGphejBleXJ0Ymx6em1yMTUydTQifQ.bdX-UnRHYm7uFZf2tOhudA").success(function(data) {
////    $scope.geojson.data = data;
////    console.log(data);
////    console.log(data.features[0].properties);
////});
////
////$http.get('/getMarkers').success(function(response) {
////    $scope.geojson.data = response;
////    console.log(response);
////});
////
////console.log(L);
