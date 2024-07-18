/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
import { Project } from '../models/project';
export interface Demande {
  entry_date?: string;
  id?: number;
  products?: Array<Product>;
  project?: Project;
  quantity?: number;
  sort_date?: string;
  status?: string;
}
