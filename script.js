const para = document.createElement("p");
console.log(para)
const node = document.createTextNode("This is new.");
para.appendChild(node);
document.body.appendChild(para)



function insertname(){
  var output  = document.getElementById('output')
  var n = prompt("what's your name")
  if(n!=""){
    output.innerHTML = "bonjour " +n
  }
  else {
   var c =   confirm(" please provide a name")
   if(c){
    n = prompt("what's your name")
    if(n!=""){
        output.innerHTML = "bonjour " +n
      }
   }
  }
}


