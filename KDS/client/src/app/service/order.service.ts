// order.service.ts

import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, name: 'Order 1', status: 'Pending' },
    { id: 2, name: 'Order 2', status: 'Preparing' },
    { id: 3, name: 'Order 3', status: 'Ready to Serve' },
    { id: 4, name: 'Order 4', status: 'Delivered' },
  ];

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }
}
