'use strict'
const getSavedNotes = (key)=>{
    const notesJSON = localStorage.getItem(key)
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    }catch(e){
        return []
    }
}

const generateParagraph = (text, location)=>{
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    paragraph.setAttribute('class', 'note')
    document.querySelector(location).append(paragraph)
}

const removeNote = (notes, id)=>{
    const noteIndex = notes.findIndex((note)=> note.id===id)
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
    localStorage.setItem('notes', JSON.stringify(notes))
}

const generateLastEdited=(timestamp)=>`Last edited ${moment(timestamp).fromNow()}`

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}
const sortNotes = function (notes, sortBy){
    return notes.sort( (a,b)=>{
        if(sortBy === 'byEdited'){
            if(a.updatedAt>b.updatedAt)
                return -1
            if(a.updatedAt < b.updatedAt)
                return 1
            return 0
        }
        if(sortBy === 'byCreated'){
            if(a.createdAt > b.createdAt)
                return -1
            if(a.createdAt < b.createdAt)
                return 1
            return 0
        }
        if(sortBy === 'alphabetical'){
            if(a.title.toLowerCase() > b.title.toLowerCase())
                return 1
            if(a.title.toLowerCase() < b.title.toLowerCase())
                return -1
            return 0
        }
    })
}




