/**
 * Created by zturner29 on 10/23/15.
 */
app.controller('VenueController', ['$scope', '$mdDialog', function($scope, $mdDialog){

    $scope.message = "Wheeeee Venue";


    var alert;
    $scope.showDialog = function($event) {
        alert = $mdDialog.alert({
            title: 'Attention',
            content: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });

        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;
            });
    }
}]);