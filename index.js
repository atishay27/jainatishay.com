const assignments = [
  {
    heading: "Assignment - Class 1 & 2",
    problemStatement: "/assets/PS1.jpg",
    code: "https://github.com/atishay27/GFG-FSRNL/tree/assignment1",
    output: "assignment1/index.html",
  },
  {
    heading: "Assignment - Class 3 & 4",
    problemStatement: "/assets/PS2.jpg",
    code: "https://github.com/atishay27/GFG-FSRNL/tree/assignment2-complete",
    output: "assignment2/index.html",
  },
  {
    heading: "Assignment - Class 5",
    problemStatement: "/assets/PS3.jpg",
    code: "https://github.com/atishay27/GFG-FSRNL/tree/assignment3-part1",
    output: "assignment3/index.html",
  },
  {
    heading: "Assignment - Class 6",
    problemStatement: "/assets/PS4.jpg",
    code: "https://github.com/atishay27/GFG-React-Project/tree/class6",
    output: "https://atishay-jain-gfg-class6.netlify.app",
  },
];

function createAssignmentDiv(assignment) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("item");

  const heading = document.createElement("div");
  heading.classList.add("assignment-heading");
  heading.textContent = assignment.heading;
  mainDiv.appendChild(heading);

  const statement = document.createElement("a");
  statement.classList.add("problem-statement");
  statement.textContent = "View Problem Statement";
  statement.addEventListener("click", () => {
    Swal.fire({
      imageUrl: assignment.problemStatement, // Replace with the actual path to your image
      confirmButtonText: "OK",
    });
  });
  mainDiv.appendChild(statement);

  const code = document.createElement("a");
  code.classList.add("assignment-code");
  code.textContent = "View Code";
  code.href = assignment.code;
  code.target = "_blank";
  mainDiv.appendChild(code);

  const output = document.createElement("a");
  output.classList.add("assignment-output");
  output.textContent = "View Output";
  output.href = assignment.output;
  output.target = "_blank";
  mainDiv.appendChild(output);

  return mainDiv;
}

for (assignment of assignments) {
  const container = document.querySelector(".container");
  container.appendChild(createAssignmentDiv(assignment));
}
