'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.products = [];

    $http.get('/api/products').then(response => {
      this.products = response.data;
    });
  }
}

angular.module('goldenLobsterApp')
  .controller('MainController', MainController);

})();
