export interface IGetUserByIdArgs {
  id: string;
}
export interface IGetUserWithPostsByIdArgs {
  id: string;
}

export interface IUserForm {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    passwordHash?: string;
    userName: string;
    indexRef?: number;
    token?: string;
  };
}
