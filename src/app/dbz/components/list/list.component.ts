import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteIndex: EventEmitter<number> = new EventEmitter();
  
  onDeleteCharter(index: number): void {
    this.onDeleteIndex.emit(index)
  };
};
