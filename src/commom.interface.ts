export interface UserGeoLocation {
  lat: string;
  lng: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoLocation;
}
export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}
