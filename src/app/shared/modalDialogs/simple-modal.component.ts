import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gum-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() modalId: string;

  constructor() { }

  ngOnInit() {
  }

}
