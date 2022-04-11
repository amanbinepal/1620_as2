const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const createButton = document.querySelector(".fa-solid.fa-circle-plus")
const textArea = document.querySelector(".write-note-area")

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
  listedTitle = `<li>${noteTitle}</li>`
  noteList.insertAdjacentHTML("afterbegin", listedTitle)
  
}




createButton.addEventListener("click", createNote)


