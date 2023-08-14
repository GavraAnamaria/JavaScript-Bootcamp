let book = {
    title: '1984',
    author: 'banana',
    pageCount: 123
}
book.title = 'abcd'
book.pageCount+=10

let getSummary = function(book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountS: ` => ${book.pageCount}`
    }
}
let sum=getSummary(book)
console.log(sum.summary + sum.pageCountS)



let account = {
    name: 'ana',
    expenses: 0,
    income:0,
    addIncome: function (income){
        this.income += income
    },
    modifyName: function (){
        return this.name.toUpperCase();
    },
    getLength: function() {
        return this.name.length;
    }
}

let addExpense = function(account, amount){
    account.expenses += amount;
}
let deleteAccount = function(account){
    account = {};
    console.log(account)
}

deleteAccount(account)
addExpense(account, 55)
account.addIncome(1000)
console.log(account)
console.log(account.modifyName() + account.getLength())
