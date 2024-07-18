/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Presence } from '../../models/presence';

export interface GetPresenceByDateAndProject$Params {
  date: string;
  projectId: number;
}

export function getPresenceByDateAndProject(http: HttpClient, rootUrl: string, params: GetPresenceByDateAndProject$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Presence>>> {
  const rb = new RequestBuilder(rootUrl, getPresenceByDateAndProject.PATH, 'get');
  if (params) {
    rb.query('date', params.date, {});
    rb.query('projectId', params.projectId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Presence>>;
    })
  );
}

getPresenceByDateAndProject.PATH = '/presence/by-date-and-project';
