import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h3>counter: {{ counter }}</h3>

    <button (click)="counterIncrement(+1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="counterIncrement(-1)">-1</button>
    `,
})

export class AppCounter {

    public counter: number = 10;

    counterIncrement (value: number): void{
        this.counter += value
      };
    
      resetCounter(){
       this.counter = 10;
      };
}