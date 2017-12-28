angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      firstName: '',
      lastName: '',
      company: '',
      address1: '',
      number1: '',
      city1: '',
      state1: '',
      postalCode1: '',
      address2: '',
      number2: '',
      city2: '',
      state2: '',
      postalCode2: '',
      social: '',
      segcod: ''
    };

    $scope.states = ('AC AL AP AM BA CE DF ES GO MA MT MS MG PA ' +
    'PB PR PE PI RJ RN RS RO RR SC SP SE TO ').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/