(function(){
    var app = angular.module('app', []);
    // var gems = [{name: 'Sapphire', price: 22.99, display: true },
    // {name: 'Ruby', price: 499.99, display: true },
    // {name: 'Diamonds', price: 199.99, display: false },
    // {name: 'Quartz', price: 2.99, display: true }];

    app.controller('PageController', function() {
      console.print("This is working");
      // this.products = gems;
    });
})();
