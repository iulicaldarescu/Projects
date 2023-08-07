const submit = document.querySelector("#submit");
const checkRegistered = document.querySelector("#checkRegistered");
const registeredEmail = document.querySelector("#registeredEmail");
const registeredPassword = document.querySelector("#registeredPassword");

const checkUser = async () => {
  const response = await fetch("db.json");
  const data = await response.json();

  // console.log(data);
  // console.log(data.users);

  const isTrue = data.users.some((item) => {
    return (
      item.email === registeredEmail.value &&
      item.password === registeredPassword.value
    );
  });

  if (isTrue) {
    const user = data.users.find((item) => {
      return (
        item.email === registeredEmail.value &&
        item.password === registeredPassword.value
      );
    });

    localStorage.setItem("username", user.firstName);
    window.location.href = "/home.html";
  } else {
    alert("Wrong password");
  }
};

checkRegistered.addEventListener("click", () => {
  checkUser();
});
