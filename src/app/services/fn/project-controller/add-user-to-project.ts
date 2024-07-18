/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AddUserToProject$Params {
  id_project: number;
  id_user: number;
}

export function addUserToProject(http: HttpClient, rootUrl: string, params: AddUserToProject$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, addUserToProject.PATH, 'put');
  if (params) {
    rb.path('id_project', params.id_project, {});
    rb.path('id_user', params.id_user, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

addUserToProject.PATH = '/projects/{id_project}/{id_user}';
