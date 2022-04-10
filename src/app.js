const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const createButton = document.querySelector(".fa-solid.fa-circle-plus")

function createNote() {
  const textArea = document.querySelector(".create-note-area")
  
  const createArea = textArea.insertAdjacentHTML("afterbegin", "<textarea>Notes</textarea>")
  
  
  

  
}

createButton.addEventListener("click", createNote)
