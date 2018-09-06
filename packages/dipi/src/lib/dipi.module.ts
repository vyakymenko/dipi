import { NgModule } from '@angular/core';
import { DipiComponent } from './dipi.component';
import { JoinPipe } from './pipes/join.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    JoinPipe, SafePipe,
    DipiComponent
  ],
  exports: [
    JoinPipe, SafePipe,
    DipiComponent
  ]
})
export class DipiModule { }
