/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demande } from '../../models/demande';

export interface RejectDemande$Params {
  id: number;
}

export function rejectDemande(http: HttpClient, rootUrl: string, params: RejectDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
  const rb = new RequestBuilder(rootUrl, rejectDemande.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
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

rejectDemande.PATH = '/demandes/reject/{id}';
