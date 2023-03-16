// function BankAccount(name , balance = 0){

//     this.name = name,
//     this.account = Date.now(),
//     this.balance = balance

// }

// BankAccount.prototype.deposit = function(num){
//     this.balance += num
// }

// BankAccount.prototype.withdraw = function(num){
//     this.balance -= num
// }


// function SavingsAccount(name , balance = 0){
    
//     BankAccount.call(this , name , balance)
//     this.limit = 100000
// }

// SavingsAccount.prototype = Object.create(BankAccount.prototype)




// SavingsAccount.prototype.getLoan = function(num){
//     this.balance += num-500
// }

// function CurrentAccount(name , balance = 0){
//     BankAccount.call(this , name , balance)
//     this.limit = 500000
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)



// CurrentAccount.prototype.getLoan = function(num){
//     this.balance += num-1000
// }


// const farhan = new SavingsAccount("Farhan" , 1000)

// farhan.deposit(50000)
// farhan.getLoan(100000)
// farhan.withdraw(150000)

// // console.log(farhan)


// const raghu = new CurrentAccount("Raghu" , 25000)

// raghu.withdraw(20000)
// raghu.getLoan(1000000)

// console.log(raghu)


class BankAccount{
    name;
    balance;
    account;

    constructor(name , balance = 0){
        this.name = name,
        this.balance = balance,
        this.account = Date.now()
    }

    deposit(num){
        this.balance += num
    }

    withdraw(num){
        this.balance -= num
    }

}

class SavingsAccount extends BankAccount{
    limit = 100000;

    constructor(name , balance = 0){
       super(name , balance)
    }

}



const farhan = new SavingsAccount("Farhan" , 1)

// farhan.deposit(100000)

console.log(farhan)











