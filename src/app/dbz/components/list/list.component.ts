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
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  
  onDeleteCharter(id?: string): void {
    if(!id) return;

    this.onDeleteId.emit(id)
  };
};
