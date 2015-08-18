(function(){
    var app = angular.module('app', []);
    app.controller('PageController', function() {
      console.print("This is working");


    });
    app.controller('ProjectController', function() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.github.com/users/codymalick/repos", false);
      xhr.send();

      //Gotta remember to parse the json
      var data = JSON.parse(xhr.responseText);
      console.log(data);

      var items = [];
      angular.forEach(data, function(project) {
          var proj_data = {
            name : project.name,
            url : project.html_url,
            desc : project.description
          }
          items.push(proj_data);
      });

      console.log(items);
      this.projects = items;

    });
})();
