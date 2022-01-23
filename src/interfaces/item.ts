export interface IAddress {
  bairro: string;
  municipio: string;
  uf: string;
}

export interface IItem {
  linkImage: string;
  title: string;
  shortDescription: string;
  address: IAddress;
}
