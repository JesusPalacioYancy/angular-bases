import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
    public characterList: Character[] = [
      {
          id: uuid(),
          name: "Goku",
          power: 12333
      },
      {
          id: uuid(),
          name: "Vegeta",
          power: 23322
      },
      {
          id: uuid(),
          name: "Ghoan",
          power: 7000000
      }
  ];

  addCharacter(character: Character): void {
    const NewCharacter: Character = {id: uuid(), ...character}
    this.characterList.push(NewCharacter)
  };

  deleteCharacterById(id: string): void {
     this.characterList = this.characterList.filter(character => character.id !== id);
  };
}
