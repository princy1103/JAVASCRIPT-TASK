function createAccount(owner) {
  let balance = 0;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited ${amount}`);
      }
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew ${amount}`);
      }
    },
    checkBalance: function () {
      console.log(`Balance: ${balance}`);
    }
  };
}

const acc = createAccount("Princy");
acc.deposit(500);
acc.withdraw(200);
acc.checkBalance(); 
