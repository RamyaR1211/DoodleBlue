const students = ["Jai","Ramya","Sneha","Ravi","Anil"];
console.log(students[0]);
console.log(students[1]);

students.push("karthick"); //push() - adds an element to the end of the array
console.log(students);

students.pop(); // pop() - removes the last element from the array
console.log(students);

const selectedStudents = students.slice(1, 4); // slice() - extracts elements from index 1 to 3 (4 is not included)
console.log(selectedStudents);

students.splice(students.indexOf("Ravi"), 1); // splice() - removes 1 element at the index of "Ravi"
console.log(students);

console.log(students.includes("Priya"));   // includes() - checks if the array contains "Priya"

// sort
let strong = [40,10,5,20,30];
let res=strong.sort((a,b)=>a-b); // (a-b) for ascending order and (b-a) for descending order
console.log(res);


let numbers = [10, 20, 30, 40];
let res1 = numbers.reduce((total, num) => { return total + num; }  , 0); //total is the accumulator and num is the current value, 0 is the initial value of the accumulator
console.log(res1);

let numbers1 = [10, 20, 30, 40, 50];
let a=numbers1.slice(1, 3); //slice(startIndex, endIndex) - extracts elements from index 1 to 2
let b=numbers1.splice(2, 1); //splice(startIndex, deleteCount) - removes 1 element at index 2
console.log(a);
console.log(b);

let num=[10, 20, 15, 5];
let result=num.some((n)=> { return n>20; }); //some() - checks if at least one element satisfies the condition
console.log(result);

let num1=[10, 20, 15, 5];
let result1=num1.every((n)=> { return n<30; }); //every() - checks if all elements satisfy the condition
console.log(result1);

let num2=[10, 50, 15, 5];
let result2=num2.every((n)=> { return n<30; }); //every() - checks if all elements satisfy the condition
console.log(result2);

const student = { //object literal creation
  name: "John",
  age: 20
};
console.log(student.name);//accessing object properties using dot notation
console.log(student["age"]);//accessing object properties using bracket notation
student.age = 21; //updating object property
console.log(student.age);
student.city = "New York"; //adding new property to object
console.log(student.city);
console.log(student);

const student1 = { //nested object
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Los Angeles"
  }
};
console.log(student1.address.city); //accessing nested object property
console.log(student1["address"]["street"]); //accessing nested object property using bracket notation
