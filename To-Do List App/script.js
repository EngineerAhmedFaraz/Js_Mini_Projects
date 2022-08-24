let addInput = document.getElementById("inputValue");
let addTaskValue = document.getElementById("btn1");
show();  // Directly Call for Previous Table value stay..

addTaskValue.addEventListener("click", function () {
  
  addVlue = addInput.value; // Get Inpute Value 
  // I use if condition for don't add empty input values... 
  if(addVlue.trim() != 0){

    let webtask = localStorage.getItem("localtask"); // Check Local Storage Data
    if (webtask == null) {
      taskObj = []; // Data get like Array
    } else {
      taskObj = JSON.parse(webtask); // String Convert to object || for GetItem
    }
    taskObj.push(addVlue);
    localStorage.setItem("localtask", JSON.stringify(taskObj)); // Object Convert to string || for SetItem
    addInput.value = '';
  }else{
    alert("Please fill the input field...");
  }

  //Show Function Call Here Because of Add Text Button Action 
  show();

});

// Show Code:

function show() {
  let webtask = localStorage.getItem("localtask"); // Check Local Storage Data
  if (webtask == null) {
    taskObj = []; // Data get like Array
  } else {
    taskObj = JSON.parse(webtask); // String Convert to object || for GetItem
  }
  let showScreen = "";
  let tableInput = document.getElementById("tableInpt");
  taskObj.forEach((item, index) => {
    showScreen += `<tr class="tr-1">
                      <th>${index + 1}</th>
                      <td>${item}</td>
                      <td>
                        <button type="button" id="AddTask" class="button1" onclick="Edit(${index})"><i class="uil uil-edit"></i>Edit</button>
                      </td>
                      <td>
                        <button type="button" class="button2" onclick="Delete(${index})"><i class="uil uil-trash-alt"></i>Delete</button>
                      </td>
                    </tr>`;
  });
  tableInput.innerHTML = showScreen;
}

// Edit Button Code:

function Edit(index){
  // Get Hidden Value from input hidden because of save index for edit localStorage Value...
  let saveBtn = document.getElementById('btn3');    
  saveIndex.value = index;
  let add = document.getElementById('btn1');
  let save = document.getElementById('btn3');
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  addInput.value = taskObj[index];
  add.style.display = "none";
  save.style.display = "inline";
}

// Save Button Code:
let saveBtn = document.getElementById('btn3');  
saveBtn.addEventListener('click', function(){
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveIndex").value;
  taskObj[saveindex] = addInput.value;
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  // hide Save Button & Shor Add Task..
  saveBtn.style.display = "none";
  let add = document.getElementById('btn1');
  add.style.display = 'inline';
  addInput.value = '';
  show();
});

// Delete items Code:
function Delete(index){
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  show();
}

// Delete All Code:
let deleteBtn = document.getElementById('btn2');
deleteBtn.addEventListener('click', function(){
  let add = document.getElementById('btn1'); // Add Task Show Before Edit Task & Delete All time ... 
  let saveBtn = document.getElementById('btn3'); // ADD Save Button for hidden and show edit button... 
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  if(webtask != null){
    taskObj = [];
  }else{
    taskObj = JSON.parse(webtask);
    taskObj = [];
  }
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  add.style.display = "inline";
  saveBtn.style.display = "none";
  show();
});

// Search Code:
let searchList = document.getElementById('search-items');
searchList.addEventListener('input', function(){
  let trList = document.querySelectorAll('tr'); // I get Tr value of table for access data...

  Array.from(trList).forEach(function(item){ // Tr convert to Array then use function for get values
    let searchText = item.getElementsByTagName('td')[0].innerText; // I get TD index value....
    let searchListVal = searchList.value; // I get Search value ..
    // Main Point Here, I'm using regular expression for Global Value Acces...
    let reg = new RegExp(searchListVal, 'gi');
    if(searchText.match(reg)){
      item.style.display = "table";
    }
    else{
      item.style.display = "none";
    }

  });

});



