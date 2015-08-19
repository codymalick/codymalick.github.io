(function(){
    var app = angular.module('app', []);
    app.controller('PageController', function() {
      console.print("This is working");


    });
    app.controller('ProjectController', function() {
      var xhr = new XMLHttpRequest();
      var items = [];

      xhr.onreadystatechange=function() {
        if (xhr.readyState==4 && xhr.status==200) {
          var data = JSON.parse(xhr.responseText);
          console.log(data);

          angular.forEach(data, function(project) {
            var proj_data = {
              name : project.name,
              url : project.html_url,
              desc : project.description,
              stars : project.stargazers_count
            }
              items.push(proj_data);
          });
        }
      }

      xhr.open("GET", "https://api.github.com/users/codymalick/repos", true);
      xhr.send();

      //Gotta remember to parse the json
      console.log(items);
      this.projects = items;

    });
})();
