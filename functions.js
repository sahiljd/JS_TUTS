
function greet(a)
{
    console.log(a*"Hello") //Nan Not a  number
}

greet(5)

function sum(a,b)
{
    return a+b;
} 

console.log(sum(10,20))


//Arrow function

const multiply = (a,b)=>{
    return a*b;
}

console.log(multiply(10,20))
console.log(multiply)  //gives defination of the function


//Qstn

const count_vowels = (str)=>
{
    let count = 0;
    for(let i of str)
    {
        if(i == 'a'||i == 'e'||i == 'i'||i == 'o'||i == 'u')
        {
            count++;
        }
    }

    return count;
}

console.log(count_vowels('Sahil Raju'))


//console.log('a'*'a') any math op on string leads to NAN Not a Number