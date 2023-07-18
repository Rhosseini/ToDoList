window.addEventListener('DOMContentLoaded', function(){
    var enterButton = document.getElementById('enterButton');
    var emailInput = document.getElementById("emailInput");
    var errorText = document.getElementById("errorText");
    
    enterButton.addEventListener("click", function(event){
        event.preventDefault();
        checkEmail();
    });

    emailInput.addEventListener("keydown", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            checkEmail();
        }
    });

    function checkEmail(){
        var email = emailInput.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

        if (email === ''){
            errorText.textContent = 'Please enter your email.';
        }
        else if(!emailRegex.test(email)){
            errorText.textContent = 'Please enter a valid email address.';
        }
        else{
            errorText.textContent = '' ;
            window.location.href = 'list.html';
        }
    }

});

window.addEventListener("beforeunload", function(event) {
    // Clear the email input field
    document.getElementById("emailInput").value = "";
});


window.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('addButton');
  var taskTable = document.getElementById('taskTable');

  addButton.addEventListener('click', function(event) {
    event.preventDefault();
    addRow();
  });

  function addRow() {
    var innerTable = document.getElementById('innerTable');
    if (!innerTable) {
      return; // Exit if the inner table is not found
    }

    var newInnerTableRow = document.createElement('tr');
    var checkBoxCell = document.createElement('td');
    var checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBoxCell.classList.add('check_box');
    checkBoxCell.appendChild(checkBox);
    var inputCell = document.createElement('td');
    var inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputCell.classList.add('in_text');
    inputCell.appendChild(inputField);

    newInnerTableRow.appendChild(checkBoxCell);
    newInnerTableRow.appendChild(inputCell);
    innerTable.appendChild(newInnerTableRow);

    checkBox.addEventListener('change', function() {
      if (checkBox.checked) {
        inputField.style.textDecoration = 'line-through';
      } else {
        inputField.style.textDecoration = 'none';
      }
    });
    
  }
});

window.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('addButton');
  var innerTable = document.getElementById('innerTable');

  addButton.addEventListener('click', function(event) {
    event.preventDefault();
    changeClass();
  });

  function changeClass() {
    var table2 = document.getElementById('innerTable');
    table2.classList.add('tableChange');
  }
});






  
  