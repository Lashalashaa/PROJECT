

const nav = ["home", "cottages", "location",  "contact"];
const links = ["index.html", "cottages.html", "location.html",  "contacts.html"];

let navsigrdze = nav.length;

let navtext = '<ul class="flex">';
for(let i=0; i<navsigrdze; i++){
    navtext += '<li><a href="' +links[i]+'">' + nav[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;


