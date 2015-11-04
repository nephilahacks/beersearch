angular.module('beerapp.directives.beerdetails', [])
.directive('beerDetails', function () {
  return {
    restrict: "AE",
    scope: {
      ngModel: '=',
    },
    templateUrl: 'static/partials/beerdetails.html',
  };
})
