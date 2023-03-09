class ATM {
  constructor(pin, balance) {
    this.pin = pin;
    this.balance = balance;
  }
loginTime(){
  return new Date ()
}

  checkBalance(p) {
    if (p == this.pin) {
      setTimeout(()=>{
      console.log(
        "Your balance is " + this.balance + "  on " + this.loginTime()
      )},5000)
      

    } else {
      console.log("Incorrect pin!");
      }
    return ;
  }

  WithdrawCash(p, amt) {
    if (p == this.pin) {
     if (amt <= this.balance) {
        setTimeout(() => {
        this.balance = this.balance - amt;
        console.log(
          " please collect your cash. " +
            " Your balance is " +
            this.balance +
            " Rupees on " +
            this.loginTime()
        );},5000)

      } else {
        console.log("Insufficient Balance");
      }
    } else {
      console.log("Incorrect Pin!");
    }

    return;
  }
}

// let Rakesh = new ATM(1234, 50000);

// console.log(Rakesh.checkBalance(1234));
// console.log(Rakesh.WithdrawCash(1234,3000))

// console.log(Rakesh.checkBalance(1234))
