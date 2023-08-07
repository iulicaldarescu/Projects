import { getFetched } from "./fetchInputField.js";
import { filterByRegion } from "./filterByRegion.js";

export const mainUrl = "https://restcountries.com/v3.1/all";
export const countryParent = document.querySelector("#country-parent");
export const searchCountryInput = document.querySelector("#country-search");
export const search = document.querySelector("#search-icon");
export const deleteField = document.querySelector("#delete-field");

const loggedUser = document.querySelector("#logged-user");

const username = localStorage.getItem("username");
loggedUser.textContent = username;
console.log(username);

const signOut = document.querySelector("#sign-out");

signOut.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
});

const filterChosen = document.querySelector("#filter-by-region");

//create elements from dark/light mode

const lightLogo = document.querySelector("#light-logo");
const darkLogo = document.querySelector("#dark-logo");
const lightModeText = document.querySelector("#light-logo-text");
const darkModeText = document.querySelector("#dark-logo-text");

//clear search input
const clearInput = () => {
  searchCountryInput.value = "";
};

search.addEventListener("click", () => {
  console.log(searchCountryInput.value);
  getFetched();
  clearInput();
});

searchCountryInput.addEventListener("input", () => {
  getFetched();
});

//element.name.common

//get value from dropdown
const handleRegionChange = () => {
  return filterChosen.value;
};

//event listener after choosing the region
filterChosen.addEventListener("change", () => {
  const region = handleRegionChange();
  countryParent.innerHTML = "";
  filterByRegion(region);
});

//delete everything from the DOM when pressing x from input field
deleteField.addEventListener("click", () => {
  clearInput();

  countryParent.innerHTML = "";
});

//add event listener to light mode logo
const enableDarkMode = () => {
  localStorage.setItem("isDarkMode", true);
  document.documentElement.classList.add("dark");
  darkModeText.classList.add("hidden");
  darkLogo.classList.add("hidden");
  lightModeText.classList.remove("hidden");
  lightLogo.classList.remove("hidden");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("isDarkMode", false); // ???
  darkModeText.classList.remove("hidden");
  lightModeText.classList.add("hidden");
  lightLogo.classList.add("hidden");
  darkLogo.classList.remove("hidden");
};

const darkMode = localStorage.getItem("isDarkMode") === "true";

console.log(darkMode);

//check the local stored variable to see the dark/light mode
if (darkMode) {
  document.documentElement.classList.add("dark");
  darkModeText.classList.add("hidden");
  darkLogo.classList.add("hidden");
  lightModeText.classList.remove("hidden");
  lightLogo.classList.remove("hidden");
} else if (!darkMode) {
  document.documentElement.classList.remove("dark");
  darkModeText.classList.remove("hidden");
  lightModeText.classList.add("hidden");

  lightLogo.classList.add("hidden");
  darkLogo.classList.remove("hidden");
}

darkLogo.addEventListener("click", () => {
  enableDarkMode();
});

lightLogo.addEventListener("click", () => {
  disableDarkMode();
});
