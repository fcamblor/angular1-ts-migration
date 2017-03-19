import {Utilities} from "./utilities";
import * as angular from "angular";

export const HelloPageComponent = {
    template: "Hello <strong>world</strong><ul><li ng-repeat='nb in $ctrl.numbers'>{{nb}}</li></ul>",
    bindings : {
        numbers: '<'
    },
    controller: [function(){
        console.log("In hello page controller");

        this.numbers = Utilities.generateNumbers();
    }]
};
