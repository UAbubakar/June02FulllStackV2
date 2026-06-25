// ============================================
// ES6 VARIABLES

const company = "FlexiSAF";
let week = 1;

console.log(`Welcome to ${company}`);
console.log(`Frontend Training - Week ${week}`);

week = 2;


// ============================================
// STUDENT OBJECTS (Objects + Arrays)
// ============================================

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


// ============================================
// ARROW FUNCTION
// ============================================



const display = (id, content) => {
    document.getElementById(id).innerHTML = content;
};


// ============================================
// HELPER FUNCTIONS
// ============================================

const getGrade = (score) => {

    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";

    return "F";

};

const getStatus = (score) => {

    return score >= 70 ? "PASS" : "FAIL";

};


// ============================================
// forEach()
// Display Student Cards
// ============================================

let studentHTML = "";


students.forEach(student => {

    studentHTML += `

        <div class="student-card">

            <h3>${student.name}</h3>

            <p><strong>Department:</strong> ${student.department}</p>

            <p><strong>Score:</strong> ${student.score}</p>

            <p><strong>Grade:</strong> ${getGrade(student.score)}</p>

            <span class="${student.score >= 70 ? "pass" : "fail"}">

                ${getStatus(student.score)}

            </span> 

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${student.score}%"
                ></div>
 
            </div>

        </div>

    `;

});

display("students", studentHTML);  




// ============================================
// map()
// Convert Names to Uppercase
// ============================================

const uppercaseStudents = students.map((student, index) => {

    return `${index + 1}. ${student.name.toUpperCase()}`;

});

display(
    "uppercase",
    uppercaseStudents.join("<br>")
);




// ============================================
// filter()
// Passed Students

const passedStudents = students.filter(student => student.score >= 70);

let passedHTML = "";

passedStudents.forEach(student => {

    passedHTML += `

        🟢 <strong>${student.name}</strong>

        (${student.score})<br>

    `;

});

display("passed", passedHTML);




// ============================================
// reduce()
// Average Score


const totalScore = students.reduce((total, student) => {

    return total + student.score;

}, 0);

const averageScore = (totalScore / students.length).toFixed(2);

const highestScore = Math.max(...students.map(student => student.score));

const lowestScore = Math.min(...students.map(student => student.score));

display( 

    "average",

    `
    <h2>${averageScore}%</h2>

    <p>Total Score : ${totalScore}</p>

    <p>Highest Score : ${highestScore}</p>

    <p>Lowest Score : ${lowestScore}</p>

    `

); 


// ============================================
// Dashboard Statistics

document.getElementById("totalStudents").textContent =
students.length;  

document.getElementById("passedCount").textContent =
passedStudents.length;  

document.getElementById("failedCount").textContent =
students.length - passedStudents.length;

document.getElementById("averageScore").textContent =
averageScore + "%";




// ============================================
// splice()
// Replace a Student

students.splice(

    1,

    1,

    {
 
        name: "Amina",

        department: "Cyber Security",

        score: 90

    }

); 

let updatedHTML = "";

students.forEach(student => {

    updatedHTML += `

        <p>

        ✔ ${student.name}

        - ${student.department}

        (${student.score})

        </p>

    `; 

});  

display("updated", updatedHTML);




// ============================================
// OBJECT MANIPULATION


const intern = {

    name: "Umar",

    university: "Nile University",

    department: "Computer Engineering"

};


intern.level = 600;

intern.university = "Ahmadu Bello University";

console.log(intern);




// ============================================
// Console Output

console.log("Company:", company);

console.log("Current Week:", week);  

console.log("Students:", students);

console.log("Passed Students:", passedStudents);  

console.log("Average Score:", averageScore);


  