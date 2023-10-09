// start of enrollment page
// courses
// open enroll course drop-down
function enrollCourse() {
  const dropdownContent = document.getElementById("enrollcourse");
  dropdownContent.classList.toggle("show-dropdown");
}
// closing course drop-down
function closeCourse(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

// students
// open enroll student drop-dwon
function enrollStudent() {
  const dropdownContent = document.getElementById("enrollstudent");
  dropdownContent.classList.toggle("show-dropdown");
}
// closing student drop-down
function closeStudent(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

// special exams
// open enroll special exam drop-down
function enrollSpecialExam() {
  const dropdownContent = document.getElementById("enrollspecialexam");
  dropdownContent.classList.toggle("show-dropdown");
}
// closing special exams drop-down
function closeSpecial(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

// supplementary exams
// open enroll supplmentary exam drop-down
function enrollSupplementaryExam() {
  const dropdownContent = document.getElementById("enrollsupplementaryexam");
  dropdownContent.classList.toggle("show-dropdown");
}

// closing supplementary exams drop-down
function closeSupplementary(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}
// end of enrollment page

// start of registration page

// student
// open
function registerLecturer() {
  const dropdownContent = document.getElementById("registerlecturer");
  dropdownContent.classList.toggle("show-dropdown");
}

// close
function closeLecturer(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

// course
// open
function registerCourse() {
  const dropdownContent = document.getElementById("registercourse");
  dropdownContent.classList.toggle("show-dropdown");
}

// close
function closeCourse(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

// dummy chard data
function createPassingStudentsPieChart() {
  const ctx = document.getElementById("pieChart").getContext("2d");

  const data = {
    labels: ["Pass Students", "Fail Students"],
    datasets: [
      {
        data: [100, 50], // Values for the chart (100 out of 150)
        backgroundColor: [
          "rgba(0, 255, 255, 0.6)", // Cyan color for passing students
          "rgba(192, 192, 192, 0.6)", // Light gray color for remaining students
        ],
        borderColor: ["rgba(0, 255, 255, 1)", "rgba(192, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Passing Students Pie Chart",
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);
}
