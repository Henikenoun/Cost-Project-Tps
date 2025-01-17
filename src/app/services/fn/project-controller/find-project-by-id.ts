/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse } from '../../models/project-response';

export interface FindProjectById$Params {
  'project-id': number;
}

export function findProjectById(http: HttpClient, rootUrl: string, params: FindProjectById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectResponse>> {
  const rb = new RequestBuilder(rootUrl, findProjectById.PATH, 'get');
  if (params) {
    rb.path('project-id', params['project-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjectResponse>;
    })
  );
}

findProjectById.PATH = '/projects/{project-id}';
