// 1. Create object for a student
let student = {
    name: "Rahul",
    age: 21,
    course: "MCA",
    marks: 85
};


// 2. Access properties using dot notation
student.name;
student.age;


// 3. Access properties using bracket notation
student["name"];
student["course"];


// 4. Add new property dynamically
student.city = "Nagpur";
student.gender = "Male";


// 5. Update existing property
student.age = 22;
student.marks = 90;


// 6. Delete a property
delete student.gender;


// 7. Create object method
student.greet = function () {
    console.log("Hello");
};


// 8. Use `this` keyword inside method
student.introduce = function () {
    console.log("My name is " + this.name);
};


// 9. Create nested object
let student2 = {
    name: "Amit",
    age: 22,
    course: "MCA",

    address: {
        city: "Nagpur",
        state: "Maharashtra",
        pincode: 440001
    }
};


// 10. Access deeply nested property
student2.address.city;
student2.address.pincode;


// 11. Destructure object properties
let { name, age, course } = student2;


// 12. Rename variables while destructuring
let { name: studentName, age: studentAge } = student2;


// 13. Add default values during destructuring
let { name: name1, phone = "Not Available" } = student2;


// 14. Copy object using spread operator
let studentCopy = {
    ...student2
};


// 15. Merge two objects
let personalInfo = {
    name: "Rahul",
    age: 21
};

let academicInfo = {
    course: "MCA",
    marks: 85
};

let completeStudent = {
    ...personalInfo,
    ...academicInfo
};