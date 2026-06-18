// Student Profile Object

let student = {
  name: "Nihala Nasreen AS",
  age: 18,
  course: "JavaScript",
  city: "Palakkad"
};
// Display Profile on Webpage
function showProfile() {

document.getElementById("name").innerText = 
student.name;

document.getElementById("age").innerText = 
"Age : " + student.age;

document.getElementById("course").innerText =
"Course : " + student.course;

document.getElementById("city").innerText =
"City : "+ student.city;


}











//     document.getElementById("city").innerText =
//     "City : " + student.city;

// }