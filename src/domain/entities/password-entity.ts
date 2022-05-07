import Account from "./account-entity";

class Password {
  id!: string;
  icon_url!: string;
  name!: string;
  website!: string;
  accounts!: Account[];
}

export default Password;