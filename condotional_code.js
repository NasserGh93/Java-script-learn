//  06 - Booleans und Operator ("&&" und "||")

let myConditon = true;// operatoren ! dreht das Ganze
// is not true -is false - in this example

myConditon = !myConditon;// not operator - myConditon ist nicht myConditon


myConditon = true && true; //and Operator


myConditon = 45 == "45"; // == testet ob exakt gleich // ohne Typ
myConditon = 45 === 45; // == testet ob exakt gleich // ohne Typ ->true
myConditon = 45 == "45"; // == testet ob exakt gleich // ohne Typ -> false

myConditon =  45 > 123; // größer gleich abfrage

myConditon = 45 <= 123; // größer gleichabfrage


myConditon = 45 == "45"; // == testet ob exakt gleich // ohne Typ
myConditon = 45 !== 45; // == testet ob exakt gleich // ohne Typ ->true
myConditon = 45 != 47; // != testet ob ungleich // ohne Typ

let myIfCondition = false;
let mysecondIfCondition = true;

if(myIfCondition || myIfCondition){
    console.log("hello world"); // if Bedingung
}

else if(!myIfCondition){
    console.log("hello world  if-else teil");
}
else{
    console.log("hello world  else teil");






console.log(myConditon);
}
