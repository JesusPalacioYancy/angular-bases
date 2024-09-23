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
            pawer: 12333
        },
        {
            name: "Vegeta",
            pawer: 23322
        },
        {
            name: "Ghoan",
            pawer: 7000000
        }
    ];
};
