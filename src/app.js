const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const saveBtn = `<button class="save">Save</button>`



const createButton = document.querySelector(".fa-solid.fa-circle-plus")

const textArea = document.querySelector(".write-note-area")

function createNote() {

  textArea.insertAdjacentHTML("afterbegin", "<textarea>Notes</textarea>")
  textArea.insertAdjacentHTML("afterbegin", saveBtn)

  const cancelBtn = `<button class="cancel">Cancel</button>`
  textArea.insertAdjacentHTML("afterbegin", cancelBtn)
  const cancelButton = document.querySelector(".cancel")
  cancelButton.addEventListener("click", cancelNote, {once: false})
 
    
}  

function cancelNote() {
  while (textArea.hasChildNodes()) {
    textArea.firstChild.remove()
  }
  
}


createButton.addEventListener("click", createNote, {once: true})

