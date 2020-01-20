import {Permission} from "./Permission";
import { Role} from "./Role";

export class LoginServerDTO{
  access_token: string;
  passwordIsTrue:	boolean;
  permissions	: Permission;
  roles: Role;
  status:	string;
  userNameExist	:boolean;
  username	: string;
}
