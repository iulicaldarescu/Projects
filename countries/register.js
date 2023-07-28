const inputsDiv = document.querySelector(".inputs");
const inputs = inputsDiv.querySelectorAll("input");
const backArrow = document.querySelector("#back-arrow");

backArrow.addEventListener("click", () => {
  window.location.href = "./home.html";
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

const goToLoginPage = () => {
  setTimeout(() => {
    window.location.href = "./home.html";
  }, 1000);
};

submit.addEventListener("click", () => {
  checkIfEmpty();
  if (isEmptyFound) {
    isEmptyFound = false;

    return;
  } else {
    createUser();
    removeRedBorder();
    goToLoginPage();
  }
});
