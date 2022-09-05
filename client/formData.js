function display(){
    console.log("Hello World");
}
const psName = document.getElementById('Station').value;
const form = document.getElementById("myform");
const officer = document.getElementById("Officer");
const date = document.getElementById("Date");
const victimName = document.getElementById("VictimName");
const victimPhone = document.getElementById("VictimPhone");
const subject = document.getElementById("Subject");
const accusedName = document.getElementById("AccusedName");
const details = document.getElementById("Details");
const btn = document.getElementById("Save");
btn.onclick = display();

victimName.value="aditya";
console.log(psName);