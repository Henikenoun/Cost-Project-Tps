/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectResponse } from '../../models/project-response';

export interface FindAllProjects$Params {
  page?: number;
  size?: number;
}

export function findAllProjects(http: HttpClient, rootUrl: string, params?: FindAllProjects$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAllProjects.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProjectResponse>>;
    })
  );
}

findAllProjects.PATH = '/projects';
