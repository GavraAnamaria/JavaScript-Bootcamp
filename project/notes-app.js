'use strict'
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';


// ---------------------------------------------------[ modificare text ]---------------------------------------------

const allp = document.querySelectorAll('p')
allp.forEach((p1)=>{
    if(p1.textContent.toLowerCase().includes('are'))
        p1.textContent = "nu mai are"
})


// ---------------------------------------------------[ adaugare paragraf ]---------------------------------------------

// const paragraph = document.createElement('p')
// paragraph.textContent = "element nou"
// document.querySelector('body').appendChild(paragraph)


// ---------------------------------------------------[ butoane ]---------------------------------------------

let text = ["bababa", "bananana", "nananana", "nanana"]
let buton2 = document.querySelectorAll("button")[1]
let buton1= document.querySelector("#apasa")
buton2.addEventListener('click', ()=>{
    buton1.remove()
    document.querySelectorAll('.note').forEach(function(note){note.remove()})
    this.textContent='hehe'
})
let i=0;
buton1.addEventListener('click',  ()=>{
    buton2.textContent=":("
    buton1.textContent = text[i%4]
    i++;
})


// ---------------------------------------------------[ adaugare text ]---------------------------------------------

const ana = getSavedNotes('ana')
const renderAna = ()=>{
    document.querySelector('#ana-are-mere').innerHTML = ''
    ana.forEach((text)=>{
       generateParagraph( text,'#ana-are-mere')
    })
}

renderAna()
//change-introduci tot, input-dupa fiecare litera tastata(se apeleaza in timp real)
document.querySelector('#inputText').addEventListener('change', (e)=>{
    // const paragraph = document.createElement('p')
    // paragraph.textContent = e.target.value
    // document.querySelector('#ana-are-mere').append(paragraph)
    ana.push(e.target.value)
    localStorage.setItem('ana', JSON.stringify(ana))
    renderAna()
})









// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------[ NOTES ]---------------------------------------------
// ---------------------------------------------------------------------------------------------------------

let notes = getSavedNotes('notes')

const filters = {
    searchText: '',
    noteBody: null,
    sortBy: 'alphabetical'
}


// ---------------------------------------------------[ render ]---------------------------------------------

const renderNotes = ()=>{
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function (note){
        let filteredBody = note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        if(filters.noteBody!=null)
            return filteredBody && (note.body === filters.noteBody)
        return filteredBody
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach( (note)=>{
        const divEl = document.createElement('div')
        const spanEl = document.createElement('a')
        const buttonEl = document.createElement('button')
        spanEl.textContent = note.title + "->" + note.body
        spanEl.setAttribute('href', `/edit.html#${note.id}`)
        console.log("note.id="+note.updatedAt+'\nnume:'+note.title)
        buttonEl.textContent = 'x'
        divEl.appendChild(buttonEl)
        divEl.appendChild(spanEl)
        buttonEl.addEventListener('click',  ()=>{
            removeNote(notes, note.id)
            renderNotes()
        })
        document.querySelector('#notes').append(divEl)
    })
}

//!!!!!!!!!! debugger

renderNotes()


// ---------------------------------------------------[ adaugare text ]---------------------------------------------

document.querySelector('#addText').addEventListener('change', (e)=>{
    const id = uuidv4();
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: e.target.value,
        body:false,
        createdAt: timestamp,
        updatedAt: timestamp
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`/edit.html#${id}`)
})


// ---------------------------------------------------[ cautare text ]---------------------------------------------

// document.querySelector('#searchText').addEventListener('input', (e)=>{
//     filters.searchText = e.target.value
//     renderNotes(notes, filters)
// })

document.querySelector('#searchNotes').addEventListener('submit',  (e)=>{
    e.preventDefault() //nu modifica url(actiune implicita)
    filters.searchText = e.target.elements.searchText.value
    renderNotes()
    e.target.elements.searchText.value=''
})



// ---------------------------------------------------[ checkbox ]---------------------------------------------

 document.querySelector('#completed').addEventListener('change',  (e)=>{
     if(e.target.checked) {
         filters.noteBody = true
         document.querySelector('#neterminate').checked = false
     }else
         filters.noteBody = null
     renderNotes()
 })

document.querySelector('#neterminate').addEventListener('change', (e)=>{
     if(e.target.checked) {
         filters.noteBody = false
         document.querySelector('#completed').checked = false
     }else
         filters.noteBody = null
    renderNotes()
 })


// ---------------------------------------------------[ SORTARE ]---------------------------------------------
document.querySelector('#sortNotes').addEventListener('change', (e)=>{
    filters.sortBy = e.target.value
    renderNotes()
})

//---------------------------------------------------[ Local Storage ]---------------------------------------------
// localStorage.setItem('location','Philadelphia')
// console.log(localStorage.getItem('location'))
// localStorage.getremoveItem('location')
// localStorage.clear()

// const notesJson = JSON.stringify(notes)
// console.log(notesJson)
// localStorage.setItem('notes', notesJson)
// const notesJS = localStorage.getItem('notes')
// const notes2 = JSON.parse(notesJS)
// console.log(`${notes2[0].title}`)


//---------------------------------------------------[ actualizare schimbari ]---------------------------------------------

window.addEventListener("storage",   (e)=>{
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes()
    }
})

