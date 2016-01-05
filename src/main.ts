import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FU} from 'dist/fu';

@Component({
    selector: 'main-app'
})
@View({
    templateUrl: `main.html`,
    directives: [FU]	
})
export class MainApp {

}

bootstrap(MainApp);