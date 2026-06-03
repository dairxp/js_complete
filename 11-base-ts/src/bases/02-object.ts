export const person = {
    nickName: "Tony",
    lastName: "Stark",
    age : 15,
    adress: {
        city: 'New Yock',
        zip: 1414,
        lat: 120.258,
        lng: 159,
    }
//} as const;
} 

// person.age =55;

// person = {}

// const person2 = { ...person};
const person2= structuredClone(person);

person2.nickName = "Peter"
person2.lastName = "Parker"
person2.adress.city = "Cusco"

console.log({person});
console.log({person2});