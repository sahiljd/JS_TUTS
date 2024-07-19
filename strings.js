let fullname="Sahil Raju Jadhav"
console.log(fullname)
console.log(fullname[0])

//methods

let fname="Aryan"
let lname="Kumar"


//length
console.log(fullname.length)

//charAt(idx)
console.log(fullname.charAt(0))

//slice(range)
console.log(fullname.slice(3,11))

//toUpperCase()
console.log(fullname.toUpperCase())

// toLowerCase()
console.log(fullname.toLowerCase())

//.concat(str2)
console.log(fname.concat(" ",lname))

//.trim(str)
let car="         Audi        "
console.log(car.trim())

//.replace(oldval , newval)
console.log(fullname.replace('S','R'))


//template literal

let sentence=`Hello im Sahil the robo boy`
console.log(sentence)

student={
    fname:"Sahil",
    age : 22
};

console.log("The student name is ",student.fname," His age is ",student.age)


//Using template literal
console.log(`the student name is ${student.fname} and his age is ${student.age}`)