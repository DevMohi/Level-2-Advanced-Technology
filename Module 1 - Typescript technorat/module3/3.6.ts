{
  // getter and setter
  class BankAccount {
    readonly id: number;
    name: string;

    //Private gulor shamne _ dite hoi aita ekta convention of writing
    private _balance: number;
    // protected _balance : number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }
    //Setter
    // getBalance(){
    //     return this._balance;
    // }
    //Uporer jinish ta getter die korsi
    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const goribManush = new BankAccount(111, "Gorib", 20);
  //   goribManush.addDeposit(500);
  const myBalance = goribManush.balance; //Property moto call korsi
  goribManush.deposit = 50;
  console.log(myBalance);
}
