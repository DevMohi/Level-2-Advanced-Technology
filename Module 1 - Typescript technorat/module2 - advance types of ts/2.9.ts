{
    //Conditional Types
    type a1 = null;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //conditional type example

    type z  = a1 extends null ? true : b1 extends undefined ? undefined : any //nested conditional 

    type Sheikh = {
        bike : string;
        car : string;
        ship : string; 
        plane : string; 
    }

    //car ase kina bike ase kina and tractor ase kina
    // type CheckVehicle <T> = T extends "bike" | "car" | "ship" ? true :  false;
    type CheckVehicle <T> = T extends keyof Sheikh ? true :  false; //same as above code 
    type HasBike = CheckVehicle<"car">;


    //
}