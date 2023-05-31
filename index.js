import { Client, Account } from "./modules/index.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const accountClient1 = new Account(client1, 1001, "SALARY");
const accountClient2 = new Account(client2, 1002);

accountClient1.deposit(500);
accountClient1.deposit(100);
accountClient1.deposit(50);
accountClient1.deposit(0);

accountClient1.withdraw(400);

accountClient2.deposit(1000);
accountClient2.deposit(100);

accountClient2.withdraw(80);

console.log({
  name: accountClient1.client.name,
  balance: accountClient1.balance,
  accountType: accountClient1.accountType,
});
console.log({
  name: accountClient2.client.name,
  balance: accountClient2.balance,
  accountType: accountClient2.accountType,
});

accountClient1.transfer(accountClient2, 200);

console.log({
  name: accountClient1.client.name,
  balance: accountClient1.balance,
});

console.log({
  name: accountClient2.client.name,
  balance: accountClient2.balance,
});
