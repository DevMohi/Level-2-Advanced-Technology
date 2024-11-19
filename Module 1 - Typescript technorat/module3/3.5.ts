{
    //Access Modifiers
    //Private property shudu nijer class er modde available hoi and if you want it to be avaialble in another child then use protected 
    class BankAccount {
        readonly id : number;
        name : string;

        //Private gulor shamne _ dite hoi aita ekta convention of writing 
        private _balance : number;
        // protected _balance : number; 

        constructor(id: number , name : string, balance :number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount :number){
            this._balance += amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
 
    }

    const goribManush = new BankAccount(111, 'Gorib', 20);
    goribManush.addDeposit(500);
    const myBalance = goribManush.getBalance();
    console.log(myBalance);
    
}