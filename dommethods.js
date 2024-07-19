let heading=document.getElementById("hey");
console.log(heading)

let p = document.getElementsByClassName("para")
console.log(p)

let t = document.getElementsByTagName("strong")
console.log(t)

let firstele = document.querySelector("p")   //return first occurence of the mentioned tag or #id or .class
console.log(firstele)

let allele = document.querySelectorAll("p")//returns all occurences
console.log(allele)

let diveles = document.querySelector("div")


//dom properties


// .tagName
console.log(heading.tagName)

//.innerText returns text of element and all its children
console.log(diveles.innerText)

//.innerHTML returns text of that element
console.log(heading.innerHTML)

//.innerHTML returns text even for hidden elements
console.log(heading.textContent)

