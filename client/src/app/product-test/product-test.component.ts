import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent {
  @Input() message : string | undefined;
  @Output() newMessageEvent = new EventEmitter();
  constructor(
    ) { }

  ngOnInit(): void {
  }

  changeName(value: string | symbol){
    this.newMessageEvent.emit(value);
  }
}
