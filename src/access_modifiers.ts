{
  //* Access Modifier
  class BankAccount {
    // id: number;
    public readonly id: number;
    // name: string;
    public readonly name: string;
    // balance: number;
    private _balance: number;
    // protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }
  class ChildAccount extends BankAccount {
    test() {
      // this._balance
      // this.
    }
  }
  const theAccountOfPoorPerson = new BankAccount(123, "Mr Sifat", 10000);
  console.log(theAccountOfPoorPerson);
  //   theAccountOfPoorPerson.balance = 0;
  //   console.log(theAccountOfPoorPerson);
  theAccountOfPoorPerson.addDeposit(20);
  const myBalance = theAccountOfPoorPerson.getBalance();
  console.log(myBalance);
}
