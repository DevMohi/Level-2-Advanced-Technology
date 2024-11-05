// Generic Constraint with keyOf operator
{
    type Vehicle = {
        bike : string;
        car : string;
        ship : string; 
    }

    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle; //bike , car , ship
    const person1 : Owner2 = "car" ;


    // user['name'] => retruns mr persian

    const getPropertyValue  = <X,Y extends keyof X> (obj : X , key : Y) => {
        return obj[key];
    }

    const user =  {
        name : 'mR PERSIAN',
        age : 26,
        address : 'ctg'
    }

    //This will retur an object with the key name , for this code below it will return mr Persian 
    const result1 = getPropertyValue(user ,'name');

}