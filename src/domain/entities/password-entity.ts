import Account from "./account-entity";
import { BaseEntity } from "./common/base-entity";

class Password implements BaseEntity {
  constructor(id: string,
    icon_url: string,
    nickname: string,
    website: string) {
      this.id = id;
      this.icon_url = icon_url;
      this.name = nickname;
      this.website = website;

      this.accounts = new Array<Account>();
      this.created_at = new Date();
  }
  id!: string;
  icon_url!: string;
  name!: string;
  website!: string;
  accounts!: Account[];

  created_at: Date;
  updated_at?: Date | undefined;

  addAccount(account: Account): void {
    this.accounts.push(account);
  }
}

export default Password;