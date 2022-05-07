import { uuid, isUuid } from "uuidv4";
import Account from "../../src/domain/entities/account-entity";
import Password from "../../src/domain/entities/password-entity"

describe('Password', () => {
  test('should create password entity', () => {
    // Arrange 
    const id: string = uuid();
    const icon_url: string = "http://image.icon";
    const website: string = "www.google.com";
    const name: string = "Gmail";
    let passwordEntity: Password | undefined = undefined;

    // Act
    passwordEntity = new Password(
      id,
      icon_url,
      name,
      website
    );

    // Assert
    expect(passwordEntity).toBeDefined();
    expect(isUuid(passwordEntity.id)).toBe(true);
  });

  test('should add account in password entity', () => {
    // Arrange 
    const id: string = uuid();
    const icon_url: string = "http://image.icon";
    const website: string = "www.google.com";
    const name: string = "Gmail";
    const passwordEntity: Password = new Password(
      id,
      icon_url,
      name,
      website
    );
    const idAccount: string = uuid();
    const nickname = undefined;
    const login: string = "login@email.com.br";
    const password: string = "password@2022";
    const note: string = "This system has localization security";
    const accountEntity: Account = new Account(
      idAccount,
      nickname,
      login,
      password,
      note);

    // Act
    passwordEntity.addAccount(accountEntity);
    
    // Assert
    expect(passwordEntity).toBeDefined();
    expect(passwordEntity.accounts.length).toBeGreaterThan(0);
  });
});
