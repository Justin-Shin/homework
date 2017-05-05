function Household {
  this.members = {}
  this.addMember = function(member){

  }
  this.deleteMember = function(member){

  }
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

var addBtn = document.querySelector(".add")
var sbmtBtn = document.querySelector("[type=submit]")
var hshldObj = New Household()

// Listener for clicking add, should check check for validity, get
// data, and if valid add to the Household.
addBtn.addEventListener('click', function(event){
  //prevent reload
  event.preventDefault()
  var dataVerified = verifyData(getFormData())
  if(dataVerified){
    //data is valid
    hshldObj.addMember(dataVerified)
  } else {
    //means data is not valid
  }
});

// Listener for clicking submit, should submit the data as a JSON
// object
sbmtBtn.addEventListener('click', function(event){
  //prevent reload
  event.preventDefault()

});
