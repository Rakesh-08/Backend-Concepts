// let BankAccount = function (name, add, phone, amount) {
//   this.name = name;
//   this.add = add;
//   this.phone = phone;
//   this.balance = amount;
// };

// let cs1 = new BankAccount("Mandal", "xyz", 8448, 1000);
// let cs2 = new BankAccount("sharmaji", "abc", 8285, 2000);

// BankAccount.prototype.Deposit = function (amount) {
//   this.balance += amount;
// };

// function Withdraw(amount) {
//   this.balance -= amount;
// }
// console.log(cs1.balance);
// cs1.Deposit(2000);
// console.log(cs1.balance);

// Withdraw.call(cs1, 3000);
// console.log(cs1.balance);

function Account(bal) {
  this.bal = bal;

  function deposit(amt) {
    return (bal += amt);
  }

  function Withdraw(amt) {
    return (bal -= amt);
  }

  function getbalance() {
    return bal;
  }
  return {
    // Revealing module design pattern
    deposit: deposit,
    Withdraw: Withdraw,
    getbalance: getbalance,
  };
}

let acc = Account(1000);
console.log(acc.getbalance());
console.log(acc.deposit(2000));
console.log(acc.Withdraw(4000));
