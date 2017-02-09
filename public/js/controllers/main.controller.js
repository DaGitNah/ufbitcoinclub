(function() {
  angular.module('BitcoinClub')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', 'SignupService'];

function MainController($scope, SignupService){
  $scope.createMember = createMember;

  function createMember(newMember){
    SignupService.create(newMember);
    $scope.newMember = '';
  }

}

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});


}());
