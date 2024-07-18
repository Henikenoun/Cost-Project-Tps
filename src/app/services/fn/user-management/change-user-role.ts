/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface ChangeUserRole$Params {
  userId: number;
  roleId: number;
}

export function changeUserRole(http: HttpClient, rootUrl: string, params: ChangeUserRole$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
  const rb = new RequestBuilder(rootUrl, changeUserRole.PATH, 'put');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.path('roleId', params.roleId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<User>;
    })
  );
}

changeUserRole.PATH = '/users/{userId}/roles/{roleId}';
