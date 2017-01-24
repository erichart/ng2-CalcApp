import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    formula: string = '';

    append(element: string){
        this.formula += element;
    }

    clearEntry() {
        if (this.formula != '') {
            this.formula = this.formula.slice(0, -1)
        }
    }

    clear(){
        this.formula = '';
    }

    evaluate(){
        try {
            this.formula = eval(this.formula);
        }
        catch(e){
            this.formula = 'Invalid equation: Press \'C\' to enter a new equation.';
        }
    }

}