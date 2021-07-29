export default interface UserInterface {
  id?: number;
  userId?: number;
  name: string;
  email: string;
  password?: string;
  cpf?: string;
  cnpj?: string;
  telephone?: string;
  companyName?: string;
  addressZipcode?: string;
  addressStreet?: string;
  addressNumber?: number;
  addressComplement?: string;
  addressState?: string;
  addressCity?: string;
  addressDistrict?: string;
}
