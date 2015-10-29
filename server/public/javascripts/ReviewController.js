app.controller('ReviewController', function($scope, $mdDialog){

     $scope.showAdvanced = function(ev){
$mdDialog.show({
    controller: DialogController,
    templateUrl: 'views/reviewForm.html',
    parent:angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true
})
};

});
