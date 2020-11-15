export interface User {
  id: number;
  nickname: string;
  email: string;
}

export interface Room {
  id: number;
  name: string;
  users: User[];
}
