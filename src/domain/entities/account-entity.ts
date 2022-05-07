import { BaseEntity } from "./common/base-entity";

class Account implements BaseEntity {
  constructor(id: string, 
              nickname: string | undefined, 
              login: string, 
              password: string, 
              note: string | undefined) {
    this.id = id;
    this.nickname = nickname;
    this.login = login;
    this.password = password;
    this.note = note;
    this.created_at = new Date();
  }

  id!: string;
  nickname: string | undefined;
  login!: string;
  password!: string;
  note: string | undefined;

  created_at: Date;
  updated_at?: Date | undefined;
}

export default Account;