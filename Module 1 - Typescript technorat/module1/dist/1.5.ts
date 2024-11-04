// Reference Type => Object

{
//Tyoe define korar somoi use semicolon , type defining 
const user :  {

    //Example company ke fixed korte chao
    readonly company? : 'Programming Hero'; //literal type -> a value that you want to be fixed 
    firstName : string; //required hoie jai automatically 
    middleName? : string; //optional type
    lastName : string;
    isMarried : boolean;
} = {
    company : 'Programming Hero',
    firstName : 'Farhan',
    middleName : 'abdur',
    lastName : 'Rahman',
    isMarried : true,
}

console.log(user.company);

}