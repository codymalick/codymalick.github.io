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

        // var xhr0 = new XMLHttpRequest();
        // xhr0.open("GET", "https://api.github.com/repos/codymalick/codymalick.github.io/stats/contributors");
        // xhr0.send();
        // console.log(xhr0.responseText);
        // console.log(project.name);
        // var contributors = JSON.parse(xhr0.responseText);
        // console.log(contributors);

        var proj_data = {
          name : project.name,
          url : project.html_url,
          desc : project.description,
          stars : project.stargazers_count
        }
          items.push(proj_data);
      });

      console.log(items);
      this.projects = items;

    });
})();
