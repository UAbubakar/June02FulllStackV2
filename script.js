// ======================================================
// FlexiSAF Frontend Training Dashboard
// Week 1 Deliverable
// Demonstrates:
// - let & const
// - Objects
// - Arrays
// - Arrow Functions
// - forEach()
// - map()
// - filter()
// - reduce()
// - splice()
// ======================================================

  

  
// =========================
// ES6 VARIABLES
// =========================

const company = "FlexiSAF";
let trainingWeek = 1;

console.log(`Welcome to ${company}`);
console.log(`Frontend Development - Week ${trainingWeek}`);

trainingWeek = 2;

  
  
 
// =========================
// STUDENT DATA (Objects)
// =========================

const students = [

    {
        name: "Umar",
        department: "Computer Engineering",
        score: 80
    },

    {
        name: "Abdultariq",
        department: "Software Engineering",
        score: 72
    },

    {
        name: "Hajara",
        department: "Computer Science",
        score: 95
    },

    {
        name: "Anisa",
        department: "Software Engineering",
        score: 50
    },

    {
        name: "Usman",
        department: "Software Engineering",
        score: 80
    },

    {
        name: "Musa",
        department: "Computer Science",
        score: 44
    }

];
     
 

// =========================
// Helper Function
// Displays HTML
// =========================

const display = (id, content) => {

    document.getElementById(id).innerHTML = content;

};

     
// =========================
// Grade Calculator
// =========================

const getGrade = (score) => {

    if (score >= 70) {

        return "A";

    }

    else if (score >= 60) {

        return "B";

    }

    else if (score >= 50) {

        return "C";

    }

    else if (score >= 45) {

        return "D";

    }

    return "F";

};
   
 

// =========================
// Pass / Fail
// =========================

const getStatus = (score) => {

    return score >= 70 ? "PASS" : "FAIL";

};
  


 
  

// =========================
// forEach()
// Display Students
// =========================

let studentCards = "";

students.forEach(student => {

    studentCards += `

    <div class="student-card">

        <h3>${student.name}</h3>

        <p><strong>Department:</strong> ${student.department}</p>

        <p><strong>Score:</strong> ${student.score}%</p>

        <p><strong>Grade:</strong> ${getGrade(student.score)}</p>

        <span class="${student.score >= 70 ? "pass" : "fail"}">

            ${getStatus(student.score)}

        </span>

        <div class="progress">

            <div
                class="progress-bar"
                style="width:${student.score}%">

                ${student.score}%

            </div>

        </div>

    </div>

    `;

});

display("students", studentCards);

    
      
// =========================
// map()
// =========================

const uppercaseStudents = students.map((student, index) => {

    return `${index + 1}. ${student.name.toUpperCase()}`;

});

display(

    "uppercase",

    uppercaseStudents.join("<br>")

);

  


// =========================
// filter()
// =========================

const passedStudents = students.filter(student => {

    return student.score >= 70;

});

let passedHTML = "";

passedStudents.forEach(student => {

    passedHTML += `

        ✅ ${student.name}

        (${student.score}%)

        <br>

    `;

});

display("passed", passedHTML);




// =========================
// reduce()
// =========================

const totalScore = students.reduce((sum, student) => {

    return sum + student.score;

}, 0);

const averageScore = (totalScore / students.length).toFixed(2);

const highestScore = Math.max(

    ...students.map(student => student.score)

);

const lowestScore = Math.min(

    ...students.map(student => student.score)

);


// Display reduce() results

display(

    "average",

    `
        <p><strong>Total Score:</strong> ${totalScore}</p>

        <p><strong>Average Score:</strong> ${averageScore}%</p>

        <p><strong>Highest Score:</strong> ${highestScore}%</p>

        <p><strong>Lowest Score:</strong> ${lowestScore}%</p>
    `

);


// =========================
// Dashboard Statistics
// =========================

document.getElementById("totalStudents").textContent = students.length;

document.getElementById("passedCount").textContent = passedStudents.length;

document.getElementById("failedCount").textContent =
    students.length - passedStudents.length;

document.getElementById("averageScore").textContent =
    `${averageScore}%`;


// =========================
// splice()
// Replace one student
// =========================

// Create a copy so the original students array
// remains unchanged.

const updatedStudents = [...students];

updatedStudents.splice(1, 1, {

    name: "Musa",

    department: "Cyber Security",

    score: 90

});


let updatedHTML = "";

updatedStudents.forEach(student => {

    updatedHTML += `

        <p>

            <strong>${student.name}</strong>

            (${student.department})

            - ${student.score}%

        </p>

    `;

});


display("updated", updatedHTML);


// =========================
// Object Manipulation
// =========================

const intern = {

    name: "Umar",

    university: "Nile University",

    department: "Computer Engineering"

};


// Add a new property

intern.level = 500;


// Update an existing property

intern.university = "Ahmadu Bello University";


// Display in the browser console

console.log("========== Object Manipulation ==========");

console.log(intern);


// =========================
// Console Messages
// =========================

console.log("");

console.log("========== Array Methods ==========");

console.log("Original Students");

console.table(students);

console.log("");

console.log("Uppercase Names");

console.table(uppercaseStudents);

console.log("");

console.log("Passed Students");

console.table(passedStudents);

console.log("");

console.log("Updated Student List");
  
console.table(updatedStudents);

console.log("");

console.log(`Average Score: ${averageScore}%`);

console.log("");   

console.log("Dashboard Loaded Successfully.");  

console.log("End of Week 1 Deliverable.");  




