import { EventEmitter } from 'protractor';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../cart.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // @Input() product : Product;
  @Output() notify = new EventEmitter();
  constructor(@Input() product : Product) { }

  ngOnInit(): void {
  }

}
