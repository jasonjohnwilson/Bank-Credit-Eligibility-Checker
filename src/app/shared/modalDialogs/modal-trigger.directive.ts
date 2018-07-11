import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../../core/services/jquery.service';

@Directive({
  selector: '[gumModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    const modalId = this.el.attributes.getNamedItem('app-modal-id').value;

    this.el.addEventListener('click', e => {
      const form = this.$('#' + modalId).find('form')[0];
      if (form) {
        form.reset();
      }
      this.$('#' + modalId).modal({});
    });
  }
}
