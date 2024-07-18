/* tslint:disable */
/* eslint-disable */
import { Demande } from '../models/demande';
export interface Project {
  budget?: number;
  createdAt?: string;
  createdBy?: string;
  demandes?: Array<Demande>;
  description?: string;
  end_date?: string;
  id?: number;
  location?: string;
  name?: string;
  status?: string;
  type?: string;
}
