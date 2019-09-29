values = [];

function addRecord() {
var inp = document.getElementById('title');
values.push(inp.value);
 inp.value = "";  
}

function displayRecord() {
document.getElementById("values").innerHTML = values.join(", ");
}

function searchStringInArray() {
    var input = document.getElementById("search").value;

    for (i=0; i<values.length; i++){
       if (values[i] == input) {
          alert(" Movie "+ values[i] + " Found "); 
          return;
       }
    }
    alert("Value not found");
}