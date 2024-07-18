/* tslint:disable */
/* eslint-disable */
import { OrderItemRequest } from '../models/order-item-request';
export interface OrderRequest {
  items?: Array<OrderItemRequest>;
  orderDate?: string;
  userId?: number;
}
