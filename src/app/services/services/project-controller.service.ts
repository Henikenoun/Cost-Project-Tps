/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addUserToProject } from '../fn/project-controller/add-user-to-project';
import { AddUserToProject$Params } from '../fn/project-controller/add-user-to-project';
import { deleteProject } from '../fn/project-controller/delete-project';
import { DeleteProject$Params } from '../fn/project-controller/delete-project';
import { findAllProjects } from '../fn/project-controller/find-all-projects';
import { FindAllProjects$Params } from '../fn/project-controller/find-all-projects';
import { findProjectById } from '../fn/project-controller/find-project-by-id';
import { FindProjectById$Params } from '../fn/project-controller/find-project-by-id';
import { ProjectResponse } from '../models/project-response';
import { saveProject } from '../fn/project-controller/save-project';
import { SaveProject$Params } from '../fn/project-controller/save-project';
import { updateProject } from '../fn/project-controller/update-project';
import { UpdateProject$Params } from '../fn/project-controller/update-project';
import { updateProjectStatus } from '../fn/project-controller/update-project-status';
import { UpdateProjectStatus$Params } from '../fn/project-controller/update-project-status';

@Injectable({ providedIn: 'root' })
export class ProjectControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateProjectStatus()` */
  static readonly UpdateProjectStatusPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProjectStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProjectStatus$Response(params: UpdateProjectStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateProjectStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProjectStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProjectStatus(params: UpdateProjectStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateProjectStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateProject()` */
  static readonly UpdateProjectPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProject$Response(params: UpdateProject$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProject(params: UpdateProject$Params, context?: HttpContext): Observable<number> {
    return this.updateProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `deleteProject()` */
  static readonly DeleteProjectPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProject$Response(params: DeleteProject$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProject(params: DeleteProject$Params, context?: HttpContext): Observable<string> {
    return this.deleteProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addUserToProject()` */
  static readonly AddUserToProjectPath = '/projects/{id_project}/{id_user}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUserToProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserToProject$Response(params: AddUserToProject$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addUserToProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUserToProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserToProject(params: AddUserToProject$Params, context?: HttpContext): Observable<string> {
    return this.addUserToProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `findAllProjects()` */
  static readonly FindAllProjectsPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllProjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllProjects$Response(params?: FindAllProjects$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjectResponse>>> {
    return findAllProjects(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllProjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllProjects(params?: FindAllProjects$Params, context?: HttpContext): Observable<Array<ProjectResponse>> {
    return this.findAllProjects$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjectResponse>>): Array<ProjectResponse> => r.body)
    );
  }

  /** Path part for operation `saveProject()` */
  static readonly SaveProjectPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProject$Response(params: SaveProject$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveProject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProject(params: SaveProject$Params, context?: HttpContext): Observable<number> {
    return this.saveProject$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findProjectById()` */
  static readonly FindProjectByIdPath = '/projects/{project-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findProjectById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProjectById$Response(params: FindProjectById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectResponse>> {
    return findProjectById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findProjectById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProjectById(params: FindProjectById$Params, context?: HttpContext): Observable<ProjectResponse> {
    return this.findProjectById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjectResponse>): ProjectResponse => r.body)
    );
  }

}
