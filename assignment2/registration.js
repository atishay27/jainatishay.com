const registrationForm = document.querySelector(".registration-form");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  const simpleStrongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  return simpleStrongPasswordRegex.test(password);
}

function registerUser(email, fname, lname, password) {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerHTML = "";

  const userDiv = document.createElement("div");
  userDiv.classList.add("resgistration-success-div");
  const divHeader = document.createElement("h1");

  divHeader.textContent = "Registeration Successful";
  divHeader.classList.add("form-caption");
  userDiv.appendChild(divHeader);

  userDiv.appendChild(createRuler());
  userDiv.appendChild(createLabel("Email"));
  userDiv.appendChild(createLabelContent(email));

  userDiv.appendChild(createRuler());
  userDiv.appendChild(createLabel("Name"));
  userDiv.appendChild(createLabelContent(fname + " " + lname));

  userDiv.appendChild(createRuler());
  userDiv.appendChild(createLabel("Password"));
  userDiv.appendChild(createLabelContent(password));
  userDiv.appendChild(createRuler());

  const goBackBtn = document.createElement("button");
  goBackBtn.classList.add("submit-btn");
  goBackBtn.classList.add("success-btn");
  goBackBtn.textContent = "Go Back";
  goBackBtn.addEventListener("click", () => {
    window.location.href = "registration.html";
  });
  userDiv.appendChild(goBackBtn);

  mainDiv.appendChild(userDiv);
}

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = document.querySelector("#user-email");
  const userFirstName = document.querySelector("#user-fname");
  const userLastName = document.querySelector("#user-lname");
  const userPassword = document.querySelector("#user-password");
  const userConfirmPassword = document.querySelector("#user-confirm-password");

  if (!validateEmail(userEmail.value)) {
    alert("Enter Valid Email");
  } else if (!isStrongPassword(userPassword.value)) {
    alert("Enter Strong Password");
  } else if (userPassword.value !== userConfirmPassword.value) {
    alert("Password and Confirm Password is different");
  } else {
    registerUser(
      userEmail.value,
      userFirstName.value,
      userLastName.value,
      userPassword.value
    );
  }
});

function createRuler() {
  const ruler = document.createElement("hr");
  ruler.classList.add("ruler");
  return ruler;
}
function createLabel(label) {
  const labelDiv = document.createElement("p");
  labelDiv.textContent = label;
  labelDiv.classList.add("scs-label");
  return labelDiv;
}

function createLabelContent(content) {
  const contentDiv = document.createElement("p");
  contentDiv.textContent = content;
  contentDiv.classList.add("scs-content");
  return contentDiv;
}
