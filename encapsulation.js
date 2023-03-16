class BankAccount{
    name;
    #balance;
    account;
    
    constructor(name , balance = 0){
        this.name = name,
        this.#balance = balance,
        this.account = Date.now()
    }
    deposit(num){
        this.#balance += num
    }
    
    withdraw(num){
        this.#balance -= num
    }

    set balance(num){
        
        if(isNaN(num)){
            throw new Error("Invalid Data Type")
        }

        this.#balance = num
    }

    get balance(){
        return this.#balance
    }

}

class SavingsAccount extends BankAccount{
    limit = 500000;
    constructor(name , balance = 0){
        super(name , balance)
    }
    
    #checkCibil(){
        console.log("Your Cibil Score is 768")
    }

    getLoan(num){
        this.#checkCibil()
        console.log("Get Loan : " + num)
    }

}

const farhan = new SavingsAccount("Farhan")

// farhan.deposit(10000)

// farhan.getLoan(10)
// farhan.withdraw(5000)

// farhan.balance = 1000
// farhan.withdraw(100)

// console.log(farhan.balance)
console.log(farhan)

















// class BankAccount{
//     name;
//     #balance;
//     account;

//     constructor(name , balance = 0){
//         this.name = name,
//         this.#balance = balance,
//         this.account = Date.now()
//     }

//     deposit(num){
//         this.#balance += num 
//     }

//     withdraw(num){
//         this.#balance -= num 
//     }

//     set balance(num){

//         if(isNaN(num)){
//             throw new Error("Invalid Data Type")
//         }

//         this.#balance = num
//     }


//     get balance(){
//         return this.#balance
//     }

// }


// class SavingsAccount extends BankAccount{

//     limit = 100000;

//     constructor(name , balance = 0){
//         super(name , balance)
//     }

//     #checkCibil(){
//         console.log(this.balance*10/12)
//     }


//     getLoan(num){
//         this.#checkCibil()
//         console.log("Get Loan :" + num)
//     }


// }


// const raj = new SavingsAccount("Raj" , 1000)

// raj.deposit(10000)

// raj.balance = 100000

// raj.withdraw(1000)

// raj.getLoan(1)


// console.log(raj.balance)




// constructor function
// prototype
// class
// super
// Object.create()
// call()
// extends
// prototype chaining
// inheritance
// encapsulation
// setter
// getter
// public fields / private fields
// public methods / private methods





