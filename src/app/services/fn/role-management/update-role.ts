/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Role } from '../../models/role';

export interface UpdateRole$Params {
  id: number;
      body: Role
}

export function updateRole(http: HttpClient, rootUrl: string, params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
  const rb = new RequestBuilder(rootUrl, updateRole.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Role>;
    })
  );
}

updateRole.PATH = '/roles/{id}';
