function enrollCourse() {
  const dropdownContent = document.getElementById("enrollcourse");
  dropdownContent.classList.toggle("show-dropdown");
}

function enrollStudent() {
  const dropdownContent = document.getElementById("enrollstudent");
  dropdownContent.classList.toggle("show-dropdown");
}

function enrollSpecialExam() {
  const dropdownContent = document.getElementById("enrollspecialexam");
  dropdownContent.classList.toggle("show-dropdown");
}

function enrollSupplementaryExam() {
  const dropdownContent = document.getElementById("enrollsupplementaryexam");
  dropdownContent.classList.toggle("show-dropdown");
}
function closeSupplementary(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}
function closeSpecial(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}
function closeCourse(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}

function closeStudent(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.remove("show-dropdown");
}
