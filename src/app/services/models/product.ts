/* tslint:disable */
/* eslint-disable */
import { Demande } from '../models/demande';
export interface Product {
  demandes?: Array<Demande>;
  id?: number;
  name?: string;
  type?: string;
  unit_price?: number;
  unity?: string;
}
