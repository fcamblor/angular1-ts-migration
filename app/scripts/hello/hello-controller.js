
angular.module('angular1-ts-migration').component('helloPage', {
    template: "Hello <strong>world</strong><ul><li ng-repeat='nb in $ctrl.numbers'>{{nb}}</li></ul>",
    bindings : {
        numbers: '<'
    },
    controller: [function(){
        console.log("In hello page controller");

        this.numbers = window.utilities.generateNumbers();
    }]
});
