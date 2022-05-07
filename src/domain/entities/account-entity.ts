class Account {
  id!: string;
  created_at!: Date;
  updated_at: Date | undefined;
  nickname: string | undefined;
  login!: string;
  password!: string;
  note: string | undefined;
}

export default Account;