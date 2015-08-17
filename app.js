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
    app.controller('ProjectController', function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.github.com/users/codymalick/repos", false);
      xhr.send();
      var data = xhr.responseText;
      console.log(data);

      var items = [];
      angular.forEach(data, function(projects) {
        angular.forEach(projects, function(project) {
          items.push(project)
        });
      });

      console.log(items);
      // this.projects = items;
      // angular.forEach(this.projects, function(projects) {
      //   console.log(projects.name);
      // });
    });
})();
