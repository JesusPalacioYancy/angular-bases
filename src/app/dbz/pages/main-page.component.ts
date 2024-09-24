import { Component } from '@angular/core';
import { Character } from '../interface/character.interface'


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent { 

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

};
