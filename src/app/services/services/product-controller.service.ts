/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteProduct } from '../fn/product-controller/delete-product';
import { DeleteProduct$Params } from '../fn/product-controller/delete-product';
import { findAllProducts } from '../fn/product-controller/find-all-products';
import { FindAllProducts$Params } from '../fn/product-controller/find-all-products';
import { findProductById } from '../fn/product-controller/find-product-by-id';
import { FindProductById$Params } from '../fn/product-controller/find-product-by-id';
import { ProductResponse } from '../models/product-response';
import { saveProduct } from '../fn/product-controller/save-product';
import { SaveProduct$Params } from '../fn/product-controller/save-product';
import { updateProduct } from '../fn/product-controller/update-product';
import { UpdateProduct$Params } from '../fn/product-controller/update-product';

@Injectable({ providedIn: 'root' })
export class ProductControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateProduct()` */
  static readonly UpdateProductPath = '/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params: UpdateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params: UpdateProduct$Params, context?: HttpContext): Observable<number> {
    return this.updateProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `deleteProduct()` */
  static readonly DeleteProductPath = '/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct$Response(params: DeleteProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct(params: DeleteProduct$Params, context?: HttpContext): Observable<string> {
    return this.deleteProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `findAllProducts()` */
  static readonly FindAllProductsPath = '/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllProducts$Response(params?: FindAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductResponse>>> {
    return findAllProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllProducts(params?: FindAllProducts$Params, context?: HttpContext): Observable<Array<ProductResponse>> {
    return this.findAllProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductResponse>>): Array<ProductResponse> => r.body)
    );
  }

  /** Path part for operation `saveProduct()` */
  static readonly SaveProductPath = '/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct$Response(params: SaveProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct(params: SaveProduct$Params, context?: HttpContext): Observable<number> {
    return this.saveProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findProductById()` */
  static readonly FindProductByIdPath = '/products/{product-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProductById$Response(params: FindProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductResponse>> {
    return findProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProductById(params: FindProductById$Params, context?: HttpContext): Observable<ProductResponse> {
    return this.findProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductResponse>): ProductResponse => r.body)
    );
  }

}
