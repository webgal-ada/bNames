let bNames = []
const inputEl = document.getElementById("like")
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("nameList");

inputBtn.addEventListener("click", function() {
  bNames.push(inputEl.value)
  //clears out the input field
  inputEl.value = ""
  renderLeads()
})


function renderLeads() {
  let listItems = "";
  for (let i = 0; i < bNames.length; i++) {
    listItems += "<p>" + bNames[i] + "?" 
}
    ulEl.innerHTML = listItems
}
