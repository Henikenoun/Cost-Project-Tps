/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demande } from '../../models/demande';

export interface CreateDemande$Params {
  projectId: number;
  productIds: Array<number>;
  quantity: number;
}

export function createDemande(http: HttpClient, rootUrl: string, params: CreateDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
  const rb = new RequestBuilder(rootUrl, createDemande.PATH, 'post');
  if (params) {
    rb.query('projectId', params.projectId, {});
    rb.query('productIds', params.productIds, {});
    rb.query('quantity', params.quantity, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Demande>;
    })
  );
}

createDemande.PATH = '/demandes/create';
