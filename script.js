

// Function to build a dropdown
// TODO: FIX LOADING OF THIS DROPDOWN

function init() {
  var select = document.getElementById("selectCountry1");

  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  };

  var select = document.getElementById("selectCountry2");

  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  };

}
document.addEventListener("DOMContentLoaded", init, false);

// var countryA = UK;
// var countryB = USA;

// Function to compare everything

window.onload = function(){
    document.getElementById("searchCountry").onclick = resultSection;

};

function resultSection() {

    var e = document.getElementById("selectCountry1");
    var countryA = e.value;
    // console.log(countryA);

    var f = document.getElementById("selectCountry2");
    var countryB = f.value;
    // console.log(countryB);

    if (countryA === "UK"){
   var firstCountry = UK
 } else if (countryA === "USA") {
   var firstCountry = USA
 } else if (countryA === "EU") {
   var firstCountry = EU
 } else if (countryA === "IRL") {
   var firstCountry = IRL
 } else {
   var firstCountry = "Error"
 };

  if (countryB === "UK"){
   var secondCountry = UK
 } else if (countryB === "USA") {
   var secondCountry = USA
 } else if (countryB === "EU") {
   var secondCountry = EU
 } else if (countryB === "IRL") {
   var secondCountry = IRL
 } else {
   var secondCountry = "Error"
 };

    var results = _.intersectionBy(firstCountry, secondCountry, 'Country');

    // document.getElementById('travelResult').innerHTML = JSON.stringify(results);
    // console.log(results)


    tableMaker = o => {var keys = Object.keys(o[0]),
                   rowMaker = (a,t) => a.reduce((p,c,i,a) => p + (i === a.length-1 ? "<" + t + ">" + c + "</" + t + "></tr>": "<" + t + ">" + c + "</" + t + ">"),"<tr>"),
                       rows = o.reduce((r,c) => r + rowMaker(keys.reduce((v,k) => v.concat(c[k]),[]),"td"),rowMaker(keys,"th"));
                   return "<table>" + rows + "</table>";
                  };

    //     $.each(results.Country, function(i, Country) {
    //     var tblRow =    "<tr><td>" + results.Country +
    //                     "</td><td>" + person.documentname +
    //                     "</td><td><a target='_blank' href='"+ person.link.split('href=')[1]+"' >"+person.link.split('href=')[1]+"</a></td></tr>"
    //     $(tblRow).appendTo("#userdata tbody");
    // });

    document.getElementById('travelResult').innerHTML = (tableMaker(results));

// Show and hide title

    var x = document.getElementById("returnTitle");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "block";
        }


};
