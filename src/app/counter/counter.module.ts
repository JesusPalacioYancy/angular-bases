import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCounter } from './counters/counter.component'

@NgModule({
  declarations: [
    AppCounter
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppCounter
  ]
})
export class CounterModule { }
