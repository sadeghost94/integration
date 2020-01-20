import { Adresse } from './adresse';
import { Institution } from './institution';
import {Profile} from "./Profile";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    midlleName:string;
    birthday : Date;
    lastName: string;
    token: string;
    profile : Profile;
    adresse : Adresse;
    institution: Institution;
    email: string;
    
}
