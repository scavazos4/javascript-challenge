// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1:
data.forEach(function(event) {
  console.log(event);
});

data.forEach(function(event) {
    console.log(event);
    var row = tbody.append("tr");
    Object.entries(event).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

function sort() {

    var input = document.getElementById("form-control");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
}
    }
}
