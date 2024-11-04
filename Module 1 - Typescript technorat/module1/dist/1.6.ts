//Function

//Normal function
function add(num1: number, num2: number) : number {
  return num1 + num2;
}

add(2, 2);
console.log(add(2, 2));

//Arrow function
const addArrow = (num1 : number , num2 : number) : number => num1 + num2; 



//Object er modde kono ekta function thake oitake bole method

const poorUser = {
    name : 'Mezba',
    balance : 0,
    addBalance(balance: number): number{
        return this.balance + balance; 
    }
}


const arr : number [] = [1,4,10];
const newArray :number[] = arr.map ((elem: number) : number => elem * elem);