const user = {
    name: "Rahul",
    age: 25,
    city: "Nagpur"
};

const { age, ...remaining } = user;

console.log(remaining);