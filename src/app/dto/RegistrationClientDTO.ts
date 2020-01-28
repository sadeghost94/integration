import {AccountDto} from "./AccountDto";
import {AddressDto} from "./AddressDto";
import {EmailDto} from "./EmailDto";
import {InstitutionDto} from "./InstitutionDto";
import {Profile} from "./Profile";


export class RegistrationClientDTO{
  accountDto : AccountDto;
  addressDto	: AddressDto;
  birthday	: string;
  emailDto :	EmailDto;
  firstName: String
  lastName: String;
  middleName : String;
  institutionDto:	InstitutionDto;
  profile : string;


  constructor(accountDto: AccountDto, birthday: string, emailDto: EmailDto, firstName: String,middleName: String, lastName: String, institutionDto: InstitutionDto, profile: string,addressDto) {
    this.accountDto = accountDto;
    this.birthday = birthday;
    this.emailDto = emailDto;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.institutionDto = institutionDto;
    this.profile = profile;
    this.addressDto = addressDto;
  }



}
