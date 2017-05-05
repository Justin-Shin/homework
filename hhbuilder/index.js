var addBtn = document.querySelector(".add")
var sbmtBtn = document.querySelector("[type=submit]")
var hshldObj = new Household()

function Household() {
  // this will hold each family member's information as an object
  this.members = {}
  // Need this to create keys for object members
  this.num_members = 0
  this.addMember = function(member){
    this.members[this.num_members] = member
    appendFamily(member,this.num_members)
    this.num_members++
  }
  this.deleteMember = function(number){
    delete this.members[number]
  }
}

function appendFamily(family, number){
  // Create the list item to append to the OL (that is already in HTML)
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(`Age: ${family.age}; Relationship: ${family.relationship}; Smoker: ${family.smoker} `))
  // li.setAttribute("class",`delete-${number}`)
  var liMade = document.querySelector("ol").appendChild(li)

  var button = document.createElement("button")
  button.appendChild(document.createTextNode("delete"))
  // button.setAttribute("class",`delete-${number}`)
  var buttonMade = liMade.appendChild(button)

  buttonMade.addEventListener('click', function(event){
    event.preventDefault()
    document.querySelector("ol").removeChild(li);
    hshldObj.deleteMember(number)
  })

}

// This function should be invoked to get data that is inside the
// form and return it, so any changes are always apparent
// it should return an object
function getFormData(){
  // Need to store selector to get the value of the item in the
  // dropdown (when using selectedIndex)
  let relSelector = document.querySelector("[name=rel]")
  var formObj = {
    age: document.querySelector("[name=age]").value,
    relationship: relSelector.options[relSelector.selectedIndex].value,
    smoker: document.querySelector("[name=smoker]").checked
  }
  return formObj
}

// This function will be used by the listener on the button for
// submit
function submit(){

}

// Used to verify the data- if it is valid, return the data as an
// object, or else return false.
function verifyData(data){
  // is age truthy? is it above 0? is relationship truthy?
  if(data.age && parseInt(data.age) >= 0 && data.relationship ) {
    return data
  } else {
    return false
  }
}

// Listener for clicking add, should check check for validity, get
// data, and if valid add to the Household.
addBtn.addEventListener('click', function(event){
  //prevent reload
  event.preventDefault()
  var dataVerified = verifyData(getFormData())
  if(dataVerified){
    //data is valid
    console.log(dataVerified)
    hshldObj.addMember(dataVerified)
  } else {
    //means data is not valid
    alert("Please enter valid data!")
  }
});

// Listener for clicking submit, should submit the data as a JSON
// object
sbmtBtn.addEventListener('click', function(event){
  //prevent reload
  event.preventDefault()
});
