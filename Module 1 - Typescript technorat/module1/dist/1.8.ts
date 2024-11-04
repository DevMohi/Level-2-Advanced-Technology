//Destructuring

const user = {
  id: 34,
  name: {
    firstName: "Farhan",
    lastName: "Abedin",
  },
  contactNo: "0170000000",
  address: "Uganda",
};

const {
  contactNo,
  //name alias lastName ke amra arekta nam disi last hishebe call korbo 
  name: { lastName : last },
} = user;


//array destructuring

const myFriends = ['Chandler', 'Jo0e'];

const [a,bestFriends] = myFriends;