import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listHeroe: string[] = ["Spiderman", "Holk", "Iron Man", "Thor", "AntMan"]

  public deleteHeroList?: string;

  removeLastHeroe(): void {
    this.deleteHeroList = this.listHeroe.pop()
  };
};  
