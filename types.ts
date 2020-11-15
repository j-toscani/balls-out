export interface UserBody {
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Room {
  id: number;
  name: string;
  users: UserBody[];
}
