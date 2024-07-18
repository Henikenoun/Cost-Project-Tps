/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Project } from '../models/project';
import { Role } from '../models/role';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth?: string;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  lastModifiedDate?: string;
  lasttname?: string;
  name?: string;
  password?: string;
  phone?: string;
  projects?: Array<Project>;
  roles?: Array<Role>;
  username?: string;
}
