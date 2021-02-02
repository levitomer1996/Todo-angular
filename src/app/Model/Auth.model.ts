class User {
  email: string;
  password: string;
}
export interface Auth {
  user: User;
  isLogged: boolean;
}
