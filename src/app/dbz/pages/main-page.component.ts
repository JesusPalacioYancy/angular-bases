import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interface/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent { 

    constructor( private dbzService: DbzService ) {}

    get characters(): Character[] {
        return [...this.dbzService.characterList]
    };

    onDeleteCharacter(id: string) {
        this.dbzService.deleteCharacterById(id)
    };

    onNewCharacter(character: Character) {
        this.dbzService.addCharacter(character)
    };
};
