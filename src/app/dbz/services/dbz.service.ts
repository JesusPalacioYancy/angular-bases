import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
    public characterList: Character[] = [
      {
          name: "Goku",
          power: 12333
      },
      {
          name: "Vegeta",
          power: 23322
      },
      {
          name: "Ghoan",
          power: 7000000
      }
  ];

  onNewCharacter(character: Character): void {
      this.characterList.push(character)
  };

  onDeleteCharacter(index: number): void {
      this.characterList.splice(index, 1)
  };
}
