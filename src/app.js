const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const createButton = document.querySelector(".fa-solid.fa-circle-plus")
const textArea = document.querySelector(".write-note-area")
const readArea = document.querySelector(".read-note-area")

function createNote() {
  if (noteChecker()) {
    textArea.insertAdjacentHTML("afterbegin", "<textarea>Notes</textarea>")
  

    const saveBtn = `<button class="save">Save</button>`
    textArea.insertAdjacentHTML("afterbegin", saveBtn)
    const saveButton = document.querySelector(".save")
    saveButton.addEventListener("click", saveNote)


    const cancelBtn = `<button class="cancel">Cancel</button>`
    textArea.insertAdjacentHTML("afterbegin", cancelBtn)
    const cancelButton = document.querySelector(".cancel")
    cancelButton.addEventListener("click", cancelNote)

  }
}  

function noteChecker() {
  return !(document.querySelector("textarea"))
}
function cancelNote() {
  while (textArea.hasChildNodes()) {
    textArea.firstChild.remove()
  }
  
}

function saveNote() {
  const noteText = document.querySelector("textarea")
  const line = noteText.value.split("\n")
  const noteTitle = line[0]
  notes.push({title: noteTitle, noteBody: noteText.value, id: notes.length + 1})
  console.log(notes)
  while (textArea.hasChildNodes()) {
    textArea.firstChild.remove()
  }
  const noteList = document.querySelector(".notes-list")
  listedTitle = `<li id = "${notes.length}">${noteTitle}</li>`
  noteList.insertAdjacentHTML("afterbegin", listedTitle)
  

  /*const readButton = document.querySelector(".notes-list")
  const noteLink = document.querySelector(".read-note-area")
  noteLink.insertAdjacentHTML("afterbegin", notes[1])
  readButton.addEventListener("click", readNote)*/
}


const readButton = document.querySelector(".notes-list")
const closeBtn = `<button class="close">Close</button>`

function readNote(evt) {
  const id = evt.target.id
  const read = (notes[id-1])
  /*const noteLink = document.querySelector(".read-note-area")*/
  const textBody = read.noteBody.split('\n')
  const title = (textBody[0])
  const newText = textBody.splice(1).join('\n')
  if (readChecker()) {
    readArea.insertAdjacentHTML("beforeend", `<h1>${newText}</h1><p>${read.title}</p>`)
  }
  

  
  readArea.insertAdjacentHTML("afterbegin", closeBtn)
  const closeButton = document.querySelector(".close")
  closeButton.addEventListener("click", closeRead)
  
}

function closeRead() {
  while (readArea.hasChildNodes()) {
    readArea.firstChild.remove()
  }
}

function readChecker() {
  return !(document.querySelector(".read-note-area"))
}

createButton.addEventListener("click", createNote)
readButton.addEventListener("click", readNote)




