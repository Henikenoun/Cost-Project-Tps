/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createRole } from '../fn/role-management/create-role';
import { CreateRole$Params } from '../fn/role-management/create-role';
import { getAllRoles } from '../fn/role-management/get-all-roles';
import { GetAllRoles$Params } from '../fn/role-management/get-all-roles';
import { getRoleById } from '../fn/role-management/get-role-by-id';
import { GetRoleById$Params } from '../fn/role-management/get-role-by-id';
import { Role } from '../models/role';
import { updateRole } from '../fn/role-management/update-role';
import { UpdateRole$Params } from '../fn/role-management/update-role';

@Injectable({ providedIn: 'root' })
export class RoleManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRoleById()` */
  static readonly GetRoleByIdPath = '/roles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById$Response(params: GetRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
    return getRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById(params: GetRoleById$Params, context?: HttpContext): Observable<Role> {
    return this.getRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Role>): Role => r.body)
    );
  }

  /** Path part for operation `updateRole()` */
  static readonly UpdateRolePath = '/roles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
    return updateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params: UpdateRole$Params, context?: HttpContext): Observable<Role> {
    return this.updateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Role>): Role => r.body)
    );
  }

  /** Path part for operation `getAllRoles()` */
  static readonly GetAllRolesPath = '/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles$Response(params?: GetAllRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Role>>> {
    return getAllRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles(params?: GetAllRoles$Params, context?: HttpContext): Observable<Array<Role>> {
    return this.getAllRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Role>>): Array<Role> => r.body)
    );
  }

  /** Path part for operation `createRole()` */
  static readonly CreateRolePath = '/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole$Response(params: CreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Role>> {
    return createRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole(params: CreateRole$Params, context?: HttpContext): Observable<Role> {
    return this.createRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Role>): Role => r.body)
    );
  }

}
