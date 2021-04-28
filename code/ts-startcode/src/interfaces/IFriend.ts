export type Gender = "MALE" | "FEMALE" | "OTHER";

export interface IFriend {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender?: Gender;
  password: string;
  role?: string;
}
