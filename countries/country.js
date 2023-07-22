const lightLogo = document.querySelector("#light-logo");
const darkLogo = document.querySelector("#dark-logo");
const lightModeText = document.querySelector("#light-logo-text");
const darkModeText = document.querySelector("#dark-logo-text");

// Retrieve the query parameter values from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const selectedCountryFlag = urlParams.get("selectedCountryFlag");
const selectedCountryFlag = localStorage.getItem("selectedCountryFlag");
const selectedCountryName = localStorage.getItem("selectedCountryName");
const selectedOfficialName = localStorage.getItem("selectedOfficialName");
const selectedCapitalName = localStorage.getItem("selectedCapitalName");
const selectedPopulation = localStorage.getItem("selectedPopulation");
const selectedRegion = localStorage.getItem("selectedRegion");
const selectedSubregion = localStorage.getItem("selectedSubregion");
const selectedCurrency = localStorage.getItem("selectedCurrency");
const selectedLatitude = localStorage.getItem("selectedLatitude");
const selectedLongitude = localStorage.getItem("selectedLongitude");
const selectedFifa = localStorage.getItem("selectedFifa");
const selectedTld = localStorage.getItem("selectedTld");

// Update the image element's src attribute
const countryFlag = document.getElementById("country-flag");
const countryName = document.getElementById("country-name");
const officialName = document.getElementById("official-name");
const capitalName = document.getElementById("capital-name");
const population = document.getElementById("population");
const region = document.getElementById("region");
const subregion = document.getElementById("sub-region");
const currency = document.getElementById("currency");
const fifa = document.getElementById("fifa");
const tld = document.getElementById("tld");

const map = document.getElementById("map");

countryFlag.setAttribute("src", selectedCountryFlag);
countryName.textContent = selectedCountryName;
officialName.textContent = selectedOfficialName;
capitalName.textContent = selectedCapitalName;
population.textContent = selectedPopulation;
region.textContent = selectedRegion;
subregion.textContent = selectedSubregion;
currency.textContent = selectedCurrency;
fifa.textContent = selectedFifa;
tld.textContent = selectedTld;

const latitude = selectedLatitude;
const longitude = selectedLongitude;

const iframeCode = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdU52WQWGIuKU_p7Gal5OL4eH6PXleKSI&q=
${latitude},${longitude}&zoom=4"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

document.getElementById("map").innerHTML = iframeCode;

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
