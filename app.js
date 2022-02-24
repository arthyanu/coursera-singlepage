var app = angular.module("LunchCheck", []);

app.controller("LunchCheckController", function($scope){
  $scope.check = function(){
    var item1 = $scope.item;

    var itemArr = item1.split(',');
    var count = 0;
    for(var i = 0; i < itemArr.length; i++){
      console.log("length = "+itemArr[i]);
      if(itemArr[i].length > 0)
        count++;
    }
    console.log(count);
    if(count <= 3)
      $scope.output = "Enjoy!";
    else
      $scope.output = "Too much!";
  }
})
