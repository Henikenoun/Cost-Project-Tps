/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PresenceResponse } from '../../models/presence-response';

export interface FindAllPresences$Params {
  page?: number;
  size?: number;
  projectId: number;
}

export function findAllPresences(http: HttpClient, rootUrl: string, params: FindAllPresences$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PresenceResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAllPresences.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.path('projectId', params.projectId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PresenceResponse>>;
    })
  );
}

findAllPresences.PATH = '/presence/project/{projectId}';
