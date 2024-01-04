import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  orders:Order []=[];
  constructor(private orderService: OrderService){}

  ngOnInit(): void{
    this.orderService.getOrders().subscribe((orders)=>{
      this.orders = orders
    })
  }
}
