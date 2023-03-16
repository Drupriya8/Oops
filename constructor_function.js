// const abhishek = {
//     name : "Abhishek",
//     accountNumber  : 12468546,
//     balance : 500000
// }

// console.log(abhishek)


// function createAccount(name , balance){

//     return {
//         name : name,
//         accountNumber : Date.now(),
//         balance : balance
//     }

// }

// // Not Easy
// farhanAccount.deposit(1000)

// const farhanAccount = createAccount("Farhan" , 10000)

//  console.log(farhanAccount)



// Constructor Function

// function BankAccount(name , balance=0){

//     this.customerName = name,
//     this.accountNumber  = Date.now()
//     this.userBalance = balance

//     this.deposit = (num) => {
//         this.userBalance += num 
//     }

//     this.withdraw = (num) =>{
//         this.userBalance -= num
//     }
// }

// const farhanAccount =  new BankAccount("Farhan")

// farhanAccount.deposit(10000000)
// farhanAccount.withdraw(2)

// console.log(farhanAccount)


// function User(name , email , password){

//     this.name = name,
//     this.email = email,
//     this.password = password


//     this.updatePassword = (pass)=>{
//         this.password = pass
//     }

// }


// const abhi = new User("Abhi" , "abhi@gmail.com" , 123456)

// abhi.updatePassword(456123)

// console.log(abhi)



// function Products(name , price , qty){

//     this.productName = name,
//     this.productPrice = price,
//     this.productQty = qty

//     this.sell = (num) => {
//         this.productQty -= num
//     }

//     this.purchase = (num) =>{
//         this.productQty += num
//     }
// }


// const apple =  new Products("Apple" , 120 , 1200)

// apple.sell(200)

// apple.purchase(20000)

// console.log(apple)


let create = document.querySelector("#create")
let deposit = document.querySelector("#deposit")
let name = document.querySelector("#name")
let amount = document.querySelector("#amount")
let accountNumber = document.querySelector("#accountNumber")
let depositAmount = document.querySelector("#depositAmount")
let ul = document.querySelector("ul")

function BankAccount(name , balance=0){

    this.name = name,
    this.currentBalance = balance,
    this.accountNumber = Date.now()


    this.deposit = (num) => {
        this.currentBalance += num
    }

}


let accounts = []

function saveAccount(e){
    e.preventDefault()
    const newAccount = new BankAccount(name.value , parseInt(amount.value))
    accounts.push(newAccount)
    console.log(newAccount)

    let li = document.createElement("li")
    li.innerText = newAccount.name + newAccount.currentBalance
    ul.appendChild(li)
}


function depositFunction(e){
    e.preventDefault()
    const foundAccount = accounts.find(item => item.accountNumber === +accountNumber.value)
    let depositAmountValue = parseInt(depositAmount.value)
    foundAccount.deposit(depositAmountValue)
    console.log(accounts)
}

create.addEventListener("submit" , saveAccount)
deposit.addEventListener("submit" , depositFunction)