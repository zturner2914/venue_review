//
app.controller('HomeController', function($scope, $timeout, mapboxService, $mdDialog) {

    $scope.userReviews = [];


    mapboxService.init({accessToken:'pk.eyJ1IjoienR1cm5lcjI5IiwiYSI6ImNpZzc0NGphejBleXJ0Ymx6em1yMTUydTQifQ.bdX-UnRHYm7uFZf2tOhudA'});
    $timeout(function (){
        var map = mapboxService.getMapInstances()[0];
    }, 100);

    $scope.venues = [
        {
            name: 'First Ave',
            coords: {
                lat: 44.980446,
                lng: -93.274369
            },
            reviews: 'reviews',
            image: 'image goes here'
        },
        {
            name: 'Dakota Jazz Club',
            coords: {
                lat: 44.973731,
                lng: -93.275239
            },
            reviews: 'reviews',
            image: 'image goes here'
        }
    ];
    //
    $scope.showAdvanced = function(ev){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'views/reviewForm.html',
            parent:angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
    };

    //function DialogController($scope, $mdDialog) {
    //    $scope.hide = function() {
    //        $mdDialog.hide();
    //    };
    //    $scope.cancel = function() {
    //        $mdDialog.cancel();
    //    };
    //    $scope.answer = function(answer) {
    //        $mdDialog.hide(answer);
    //    };
    //}


});

function DialogController($scope, $mdDialog) {


    $scope.dad = "dad";
    //$scope.hide = function() {
    //    $mdDialog.hide();
    //};
    //$scope.cancel = function() {
    //    $mdDialog.cancel();
    //};
    //$scope.answer = function(answer) {
    //    $mdDialog.hide(answer);
    //};
}


//
//
//angular.extend($scope, {
//    //center: {
//    //    lat: 44.975,
//    //    lng: -93.261,
//    //    zoom: 14
//    //},
//    ////markers: {
//    ////    firstave: {
//    ////        lat: 44.980446,
//    ////        lng: -93.274369,
//    ////        focus: true,
//    ////        message: "First Ave",
//    ////        icon: 'music'
//    ////    },
//    ////       dakota: {
//    ////           lat: 44.973731,
//    ////           lng: -93.275239,
//    ////           focus: true,
//    ////           message: "Dakota Jazz Club",
//    ////           icon: 'music'
//    ////         }
//    ////},
//    //tiles: {
//    //    name: 'venue map',
//    //    url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
//    //    type: 'xyz',
//    //    options: {
//    //        apikey: 'pk.eyJ1IjoienR1cm5lcjI5IiwiYSI6ImNpZzc0NGphejBleXJ0Ymx6em1yMTUydTQifQ.bdX-UnRHYm7uFZf2tOhudA',
//    //        mapid: 'zturner29.cig744i180eoqtama9b08yil5'
//    //    }
//    //},
//    //geojson:{}
//});
//
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
