//-------------------------------------------[ NOTES ]---------------------------------------------

const notes = ['abcde', 'bvcd', '124']
console.log(notes[notes.length-1])

notes.push(55)
console.log(notes.pop())

console.log(notes.shift())
notes.unshift('bababa')
console.log(notes)

notes.splice(1, 0, "mama")
console.log((notes))
console.log(notes.splice(1, 2))

notes.forEach(function(item, index){
    console.log(`elem${index+1}: `+item)
})

console.log(notes.indexOf('124'))

//=== => acelai obiect
console.log({} === {})
let obj1 = {}
let obj2 = obj1
console.log(obj1 === obj2)


//-------------------------------------------[ NOTES1 ]---------------------------------------------

let notes1 = [
    {
        title: 'note1',
        body: 'anamanana'
    },    {
        title: 'note2',
        body: 'mmmmm'
    },    {
        title: 'banana',
        body: 'nnnn'
    }
]

notes1.sort(function (a,b){
        if(a.title.toLowerCase() <b.title.toLowerCase())
            return -1
        else if(b.title.toLowerCase() < a.title.toLowerCase())
            return 1
        else
            return 0
    })
console.log(notes1)

function findNote(title) {
    let index = notes1.findIndex(function (note, index) {
        return note.title.toUpperCase() === title.toUpperCase()
    })
    return notes1[index].body
}
console.log(findNote('NoTe2'))


const filteredNotes = notes1.filter(function(note, index){
    return note.title.toUpperCase().includes('NOTE')
})
console.log(`notes: ${filteredNotes}`)


const deleteNote = function(title){
    const index = notes1.findIndex(function (note){
        return note.title.toUpperCase() === title.toUpperCase()
    })
    if(index>=0)
        notes1.splice(index, 1)
}
deleteNote('note1')
console.log("delete: " + notes1)




//-------------------------------------------[ ACCOUNT ]---------------------------------------------

const account = {
    name: 'Andrew Mead',
    expenses: [{
        description: "banana",
        amount: 123
    }
    ],
    addExpense: function(description, amount){
        this.expenses.push({description, amount})
    },
    total: function(){
        let total = 0
        this.expenses.forEach(function(item){total+=item.amount })
        return total
    }
}

account.addExpense("mere", 23);
console.log(account.total())
