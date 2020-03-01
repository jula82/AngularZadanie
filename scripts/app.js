var myApp = angular
            .module('myApp',[])
            .controller('myController', function($scope) {
                $scope.vat_rate=[0,7,23];
                var taxTable = [ {
                  netto: 0,
                  vat_rate: "0",
                  vat_value: 0,
                  brutto: 0,
                },
                ]

                $scope.taxTable = taxTable;

                $scope.addtoList = function($scope){
                      var data = {
                        netto: 0,
                        vat_rate: "0",
                        vat_value: 0,
                        brutto: 0,
                      };
                      taxTable.push(data);
                }

                $scope.removeData = function(data){
                      $scope.taxTable.splice($scope.taxTable.indexOf(data),1);
                }

                $scope.check = function(value){
                      if(value == 0){
                        return null;
                      }
                      else return value;
                }


                $scope.countValues = function(data){
                      if(data.netto== null){
                            data.vat_value = 0;
                            data.brutto = 0;
                            return 0;
                      }
                      else{
                            data.vat_value = parseFloat(Math.round(data.netto*data.vat_rate)/100);

                            if(data.netto > 0){
                            var bruttofloat = data.netto + data.vat_value;
                            data.brutto = parseFloat(Math.round(bruttofloat*100)/100);
                          }
                      }
                    return data.netto;
                  }

                $scope.getTotal = function(value) {
                    var total = 0;
                    angular.forEach($scope.taxTable, function(tab) {
                        total += tab[value];
                    });
                    return total;
              };

            })


myApp.filter('myFormat', function() {
    return function(x) {
    var txt = x.replace(',', ' ').replace('.',',');
    return txt;
    };
});
