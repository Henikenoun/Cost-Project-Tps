/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demande } from '../../models/demande';

export interface ApproveDemande$Params {
  id: number;
}

export function approveDemande(http: HttpClient, rootUrl: string, params: ApproveDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
  const rb = new RequestBuilder(rootUrl, approveDemande.PATH, 'post');
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

approveDemande.PATH = '/demandes/approve/{id}';
