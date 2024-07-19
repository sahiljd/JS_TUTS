let data=['Sahil',99.99,22,'Bangalore']
console.log(data)

console.log(data[0])
console.log(data[4]) //undefined

console.log(typeof(data)) //Array is an object


//Looping

for(let i=0;i<data.length;i++)
{
    console.log(data[i])
}

//using for of

for(let i of data){
    console.log(i)
}


//Array Methods

numbers=[100,200,300,400,500,600];

//.push()
numbers.push(1000)
console.log(numbers)

//.pop()
let num = numbers.pop()
console.log('the deleted value is:',num)
console.log(numbers)

//.toString()
console.log(numbers.toString());

//.concat()

numbers2 = [34,56,23,67,3,5,8]
let result=numbers.concat(numbers2)
console.log(result)

//.unshift() adds to start
numbers.unshift(2000)
console.log(numbers)

//.shift() pops the first
numbers.shift()
console.log(numbers)

//.slice
let newone=numbers.slice(1,4)
console.log(newone)

//.splice change original array  splice(startidx, delcount from startidx, new ele)
numbers2.splice(1,3,100,200,300)
console.log(numbers2)