for (let i = 1; i <= 10; i++) {
    console.log(i)
}


n=15
while (n<=20) {
    console.log(n)
    n++;
}

v=1
do{
    console.log(v)
    v++;
}while(v<3)


// for-of (let i of strVal||arr)  only for string and array

let fname='Sahil Raju Jadhav'

for(let i of fname)
{
    console.log(i)
}

//for in  only for objects


//Creating Objects

let student = {
    name : "Sahil",
    age : 22,
    cgpa : 7.7,
    isPass : true
}

console.log(student.name)
console.log(student.age)
console.log(student.cgpa)
console.log(student.isPass)


for(let x in student)
{
    console.log(x); //return keys
    console.log(student[x]); //return value for each key
}