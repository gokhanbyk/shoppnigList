const itemForm = document.getElementById("item-form")
const itemInput = document.getElementById("item-input")
const itemList = document.getElementById("item-list")

function addItem(e) {
  e.preventDefault()

  const newItem = itemInput.value

  // Validate Input
  if (newItem === "") {
    alert("Please add an item")
    return
  }

  // Create list item
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newItem))
}

// Event Listeners
itemForm.addEventListener("submit", addItem)
