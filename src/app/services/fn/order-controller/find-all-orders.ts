/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderResponse } from '../../models/order-response';

export interface FindAllOrders$Params {
}

export function findAllOrders(http: HttpClient, rootUrl: string, params?: FindAllOrders$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OrderResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAllOrders.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OrderResponse>>;
    })
  );
}

findAllOrders.PATH = '/orders';
