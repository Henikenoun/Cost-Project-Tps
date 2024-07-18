/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveDemande } from '../fn/demande-controller/approve-demande';
import { ApproveDemande$Params } from '../fn/demande-controller/approve-demande';
import { createDemande } from '../fn/demande-controller/create-demande';
import { CreateDemande$Params } from '../fn/demande-controller/create-demande';
import { Demande } from '../models/demande';
import { rejectDemande } from '../fn/demande-controller/reject-demande';
import { RejectDemande$Params } from '../fn/demande-controller/reject-demande';

@Injectable({ providedIn: 'root' })
export class DemandeControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `rejectDemande()` */
  static readonly RejectDemandePath = '/demandes/reject/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejectDemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  rejectDemande$Response(params: RejectDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
    return rejectDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rejectDemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rejectDemande(params: RejectDemande$Params, context?: HttpContext): Observable<Demande> {
    return this.rejectDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<Demande>): Demande => r.body)
    );
  }

  /** Path part for operation `createDemande()` */
  static readonly CreateDemandePath = '/demandes/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  createDemande$Response(params: CreateDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
    return createDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createDemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createDemande(params: CreateDemande$Params, context?: HttpContext): Observable<Demande> {
    return this.createDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<Demande>): Demande => r.body)
    );
  }

  /** Path part for operation `approveDemande()` */
  static readonly ApproveDemandePath = '/demandes/approve/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveDemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveDemande$Response(params: ApproveDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Demande>> {
    return approveDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveDemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveDemande(params: ApproveDemande$Params, context?: HttpContext): Observable<Demande> {
    return this.approveDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<Demande>): Demande => r.body)
    );
  }

}
