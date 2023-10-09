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
