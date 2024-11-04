{
  //Ternary Operator  || Optional Chaining || Nullish coalescing operator

  const age: number = 15;

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log("Hello");
  console.log(isAdult);

  //Nullish coalescing operator - jodi null ar undefined er upor kono deicsion making korte hoi
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  //Optional chainging

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      paddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      paddress: "ctg town",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
  const nonExisting = console.log({ permanentAddress });
}
