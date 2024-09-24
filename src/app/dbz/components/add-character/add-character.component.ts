import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'add-character-component',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public charcter: Character = {
    name: "",
    power: 0
  };

  emitCharcter(): void {
    // console.log(this.charcter)

    if ( this.charcter.name.length === 0 ) return;

    this.onNewCharacter.emit(this.charcter)

    this.charcter = {name: '', power: 0}
  };

};
