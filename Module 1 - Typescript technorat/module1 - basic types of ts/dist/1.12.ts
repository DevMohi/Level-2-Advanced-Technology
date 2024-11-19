{
  // Nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Nothing to search");
    }
  };

  searchName(null);

  //Unknown types  - typeOf
  const getSpeed = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 36;
      console.log(`The speed is ${convertedSpeed} ms * -1`);
    } else if (typeof value === "string") {
      const valueNumber = value.split(" ")[0];
      console.log(valueNumber);

      const convertedSpeed = (parseInt(valueNumber) * 1000) / 36;
      console.log(`The speed is ${convertedSpeed} ms * -1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeed(`1000 KMH*-1`);

  //Never type 

  const throwError = (msg : string) : never => {
    throw new Error (msg);
  };

  throwError('mushkil se error hogaya')

}
