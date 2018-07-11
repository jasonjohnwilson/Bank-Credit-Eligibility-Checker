import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTriggerDirective } from './modalDialogs/modal-trigger.directive';
import { SimpleModalComponent } from './modalDialogs/simple-modal.component';
import { ModalDismissDirective } from './modalDialogs/modal-dismiss.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalTriggerDirective,
    ModalDismissDirective,
    SimpleModalComponent
  ],
  exports: [
    ModalTriggerDirective,
    ModalDismissDirective,
    SimpleModalComponent
  ]
})
export class SharedModule { }
