// dummy chard data

// first Year
function createPassingStudentsPieChart() {
  const ctx = document.getElementById("first-year").getContext("2d");

  const data = {
    labels: ["Pass", "Fail", "Supplementary", "Special"],
    datasets: [
      {
        data: [100, 20, 10, 5], // Values for the chart (100 out of 150)
        backgroundColor: [
          "rgb(28, 149, 248)", // Cyan color for passing students
          "rgb(0, 214, 79)",
          "rgb(253, 119, 116)",
          "rgb(186, 189, 193)", // Light gray color for remaining students
        ],
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
          text: "Pass List",
        },
      },
    },
  };

  const myChart = new Chart(ctx, config);
}

// // second Year
// function createPassingStudentsPieChart() {
//   const ctx = document.getElementById("second-year").getContext("2d");

//   const data = {
//     labels: ["Pass", "Fail", "Supplementary", "Special"],
//     datasets: [
//       {
//         data: [100, 20, 10, 5], // Values for the chart (100 out of 150)
//         backgroundColor: [
//           "rgb(28, 149, 248)", // Cyan color for passing students
//           "rgb(0, 214, 79)",
//           "rgb(253, 119, 116)",
//           "rgb(186, 189, 193)", // Light gray color for remaining students
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const config = {
//     type: "pie",
//     data: data,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Pass List",
//         },
//       },
//     },
//   };

//   const myChart = new Chart(ctx, config);
// }

// // third Year
// function createPassingStudentsPieChart() {
//   const ctx = document.getElementById("third-year").getContext("2d");

//   const data = {
//     labels: ["Pass", "Fail", "Supplementary", "Special"],
//     datasets: [
//       {
//         data: [100, 20, 10, 5], // Values for the chart (100 out of 150)
//         backgroundColor: [
//           "rgb(28, 149, 248)", // Cyan color for passing students
//           "rgb(0, 214, 79)",
//           "rgb(253, 119, 116)",
//           "rgb(186, 189, 193)", // Light gray color for remaining students
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const config = {
//     type: "pie",
//     data: data,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Pass List",
//         },
//       },
//     },
//   };

//   const myChart = new Chart(ctx, config);
// }

// // fourth Year
// function createPassingStudentsPieChart() {
//   const ctx = document.getElementById("fourth-year").getContext("2d");

//   const data = {
//     labels: ["Pass", "Fail", "Supplementary", "Special"],
//     datasets: [
//       {
//         data: [100, 20, 10, 5], // Values for the chart (100 out of 150)
//         backgroundColor: [
//           "rgb(28, 149, 248)", // Cyan color for passing students
//           "rgb(0, 214, 79)",
//           "rgb(253, 119, 116)",
//           "rgb(186, 189, 193)", // Light gray color for remaining students
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const config = {
//     type: "pie",
//     data: data,
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Pass List",
//         },
//       },
//     },
//   };

//   const myChart = new Chart(ctx, config);
// }
