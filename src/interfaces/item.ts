export interface IAddress {
  bairro: string;
  municipio: string;
  uf: string;
}

export interface IUser {
  id: number;
  name: string;
  phoneNumber: string;
  address: IAddress;
}

export interface IItem {
  id: string;
  mainPhoto: string;
  photos: string[];
  title: string;
  shortDescription: string;
  description: string;
  user: IUser;
}

export type IListItem = Pick<IItem, 'id' | 'title' | 'shortDescription' | 'mainPhoto'> & {
  address: IAddress;
};
