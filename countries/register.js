const inputsDiv = document.querySelector(".inputs");
const inputs = inputsDiv.querySelectorAll("input");
const backArrow = document.querySelector("#back-arrow");

backArrow.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const createUser = async () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");

  let user = {
    id: null,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("user created", data);
};

let isEmptyFound = false;

const checkIfEmpty = () => {
  inputs.forEach((item) => {
    if (item.value === "") {
      item.classList.remove("border-gray-200");
      item.classList.add("border-red-700");
      isEmptyFound = true;
    }
  });
};

const removeRedBorder = () => {
  inputs.forEach((item) => {
    item.classList.remove("border-red-700");
    item.value = "";
  });
};

const checkForDuplicates = async (email) => {
  const checkDuplicates = await fetch("http://localhost:3000/users");
  const duplicatesData = await checkDuplicates.json();

  const isDuplicate = duplicatesData.some((element) => {
    return element.email === email;
  });

  return isDuplicate;
};

const goToLoginPage = () => {
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
};

submit.addEventListener("click", async () => {
  checkIfEmpty();
  if (isEmptyFound) {
    isEmptyFound = false;
    return;
  } else {
    const email = document.querySelector("#email").value;
    const isDuplicate = await checkForDuplicates(email);

    if (isDuplicate) {
      alert("Email already exists. Please use a different email.");
      return;
    }

    createUser();
    removeRedBorder();
    goToLoginPage();
  }
});
