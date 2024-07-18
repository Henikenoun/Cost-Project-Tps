/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductResponse } from '../../models/product-response';

export interface FindProductById$Params {
  'product-id': number;
}

export function findProductById(http: HttpClient, rootUrl: string, params: FindProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponse>> {
  const rb = new RequestBuilder(rootUrl, findProductById.PATH, 'get');
  if (params) {
    rb.path('product-id', params['product-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductResponse>;
    })
  );
}

findProductById.PATH = '/products/{product-id}';