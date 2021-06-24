// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1:
data.forEach(function(event) {
  console.log(event);
});

// // // Step 2:
// data.forEach(function() {
//   var row = tbody.append("tr");
// });

// // Step 3: 
// data.forEach(function(event) {

//  var row = tbody.append("tr");

//   Object.entries(event).forEach(function([key, value]) {
//     console.log(key, value);
//  });
// });

// Step 4: 
// data.forEach(function(event) {
//     console.log(event);
//     var row = tbody.append("tr");
  
//     Object.entries(event).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//     });
//   });

  // Step 5:
data.forEach(function(event) {
    console.log(event);
    var row = tbody.append("tr");
    Object.entries(event).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });