/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteOrder } from '../fn/order-controller/delete-order';
import { DeleteOrder$Params } from '../fn/order-controller/delete-order';
import { findAllOrders } from '../fn/order-controller/find-all-orders';
import { FindAllOrders$Params } from '../fn/order-controller/find-all-orders';
import { findOrderById } from '../fn/order-controller/find-order-by-id';
import { FindOrderById$Params } from '../fn/order-controller/find-order-by-id';
import { OrderResponse } from '../models/order-response';
import { saveOrder } from '../fn/order-controller/save-order';
import { SaveOrder$Params } from '../fn/order-controller/save-order';
import { updateOrder } from '../fn/order-controller/update-order';
import { UpdateOrder$Params } from '../fn/order-controller/update-order';

@Injectable({ providedIn: 'root' })
export class OrderControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateOrder()` */
  static readonly UpdateOrderPath = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: UpdateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: UpdateOrder$Params, context?: HttpContext): Observable<number> {
    return this.updateOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `deleteOrder()` */
  static readonly DeleteOrderPath = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: DeleteOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: DeleteOrder$Params, context?: HttpContext): Observable<string> {
    return this.deleteOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `findAllOrders()` */
  static readonly FindAllOrdersPath = '/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOrders$Response(params?: FindAllOrders$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrderResponse>>> {
    return findAllOrders(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllOrders(params?: FindAllOrders$Params, context?: HttpContext): Observable<Array<OrderResponse>> {
    return this.findAllOrders$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OrderResponse>>): Array<OrderResponse> => r.body)
    );
  }

  /** Path part for operation `saveOrder()` */
  static readonly SaveOrderPath = '/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOrder$Response(params: SaveOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOrder(params: SaveOrder$Params, context?: HttpContext): Observable<number> {
    return this.saveOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findOrderById()` */
  static readonly FindOrderByIdPath = '/orders/{order-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findOrderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderById$Response(params: FindOrderById$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderResponse>> {
    return findOrderById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findOrderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findOrderById(params: FindOrderById$Params, context?: HttpContext): Observable<OrderResponse> {
    return this.findOrderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderResponse>): OrderResponse => r.body)
    );
  }

}
