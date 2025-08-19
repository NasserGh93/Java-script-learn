let title = document.getElementById("website_title");
console.log(title);

title.innerHTML = "neuer Titel";

document.getElementById("test_div").innerText ="<p>TEST</p>";

document.getElementsByClassName("button");

document.getElementById("test_div").classList.add("green_bg"); // added a class

document.getElementById("test_div").classList.remove("green_bg");// remove a class

document.getElementById("test_div").classList.toggle("green_bg");// remove the class when is in the html or added if is not inside the html

document.getElementById("test_input").value = 5456;// atribute ändern in html

document.getElementById("test_input").setAttribute("value, 123");// jedes Atribut kann man ädern

console.log(document.getElementById("test_input").value); // Value eines Inputfeldes auslesen


document.getElementById("p-tag").value;
document.getElementById("p-tag").setAttribute("das ist ein p tag");// Kannst du auch eine css class mit setAttribute hinzufügen?/Nein

// Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?

// man verändert eine Klasse mit ClassList.add("test_class")
// setAttribute("class""test_class")- man verändert den wert der Klasse

document.getElementsByClassName("d_none").classList.toggle();


function toggleDNone(id){
    document.getElementById(id).classList.toggle("d_none");
}