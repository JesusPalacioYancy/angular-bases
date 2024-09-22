import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = "Iron Man";
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase()
  };

  unionInfo(): string {
    return `${this.name} - ${this.age}`
  };

  changeHero(): void {
    this.name = "Spiderman";
  };

  changeAge(): void {
    this.age = 18;
  };

  resetDescription(): void {
    this.name = "Iron Man";
    this.age = 45;
  };

};