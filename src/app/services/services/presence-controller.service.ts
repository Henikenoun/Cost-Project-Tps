/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findAllPresences } from '../fn/presence-controller/find-all-presences';
import { FindAllPresences$Params } from '../fn/presence-controller/find-all-presences';
import { getPresenceByDateAndProject } from '../fn/presence-controller/get-presence-by-date-and-project';
import { GetPresenceByDateAndProject$Params } from '../fn/presence-controller/get-presence-by-date-and-project';
import { Presence } from '../models/presence';
import { PresenceResponse } from '../models/presence-response';
import { savePresence } from '../fn/presence-controller/save-presence';
import { SavePresence$Params } from '../fn/presence-controller/save-presence';
import { updatePresence } from '../fn/presence-controller/update-presence';
import { UpdatePresence$Params } from '../fn/presence-controller/update-presence';

@Injectable({ providedIn: 'root' })
export class PresenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePresence()` */
  static readonly UpdatePresencePath = '/presence/{presenceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePresence()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePresence$Response(params: UpdatePresence$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updatePresence(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePresence$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePresence(params: UpdatePresence$Params, context?: HttpContext): Observable<number> {
    return this.updatePresence$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllPresences()` */
  static readonly FindAllPresencesPath = '/presence/project/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPresences()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPresences$Response(params: FindAllPresences$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PresenceResponse>>> {
    return findAllPresences(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPresences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPresences(params: FindAllPresences$Params, context?: HttpContext): Observable<Array<PresenceResponse>> {
    return this.findAllPresences$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PresenceResponse>>): Array<PresenceResponse> => r.body)
    );
  }

  /** Path part for operation `savePresence()` */
  static readonly SavePresencePath = '/presence/project/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePresence()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePresence$Response(params: SavePresence$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return savePresence(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePresence$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePresence(params: SavePresence$Params, context?: HttpContext): Observable<number> {
    return this.savePresence$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getPresenceByDateAndProject()` */
  static readonly GetPresenceByDateAndProjectPath = '/presence/by-date-and-project';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPresenceByDateAndProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPresenceByDateAndProject$Response(params: GetPresenceByDateAndProject$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Presence>>> {
    return getPresenceByDateAndProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPresenceByDateAndProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPresenceByDateAndProject(params: GetPresenceByDateAndProject$Params, context?: HttpContext): Observable<Array<Presence>> {
    return this.getPresenceByDateAndProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Presence>>): Array<Presence> => r.body)
    );
  }

}
