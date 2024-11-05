{
    // Mapped Types 
        const arrOfNum : number[] = [1,4,5];

        // map ekta array return kore 
        const arrayOfStrings : string[] = arrOfNum.map(number => number.toString());
        console.log(arrayOfStrings);



        type AreaNumber = {
            height : number;
            width : number;
        }

        //Dynamically change with map types 
        //Lookup type 
        type Height = AreaNumber['height'];

        // type AreaString = {
        //     height : string;
        //     width : string;
        // }
        // Same as above 
        // key => T["width"] => returns the type of it either string , number , boolean 
        type AreaString<T> = {
            //ekta type er key kore convert kore dibe00
            [key in keyof T] : T[key]
        }

        const area1 : AreaString<{height : string; width :number}> ={
            height : "100",
            width : 300,
        }
    //
}