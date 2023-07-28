const mainUrl = "https://restcountries.com/v3.1/all";
const countryParent = document.querySelector("#country-parent");
const searchCountryInput = document.querySelector("#country-search");
const search = document.querySelector("#search-icon");
const deleteField = document.querySelector("#delete-field");

const value = document.querySelector("#value");

const filterChosen = document.querySelector("#filter-by-region");

//create elements from dark/light mode

const lightLogo = document.querySelector("#light-logo");
const darkLogo = document.querySelector("#dark-logo");
const lightModeText = document.querySelector("#light-logo-text");
const darkModeText = document.querySelector("#dark-logo-text");

//fetch from search input field
const getFetched = async () => {
  try {
    const response = await fetch(mainUrl);
    const data = await response.json();

    while (countryParent.firstChild) {
      countryParent.removeChild(countryParent.firstChild);
    }

    const filteredData = data.filter((element) => {
      return element.name.common
        .toLowerCase()
        .startsWith(searchCountryInput.value.toLowerCase());
    });

    filteredData.forEach((element) => {
      let countryCard = document.createElement("div");
      countryParent.appendChild(countryCard);
      countryCard.classList.add(
        "mt-10",
        "w-full",
        "sm:w-3/5",
        "m-auto",
        "bg-white",
        "pb-14",
        "rounded-t-lg",
        "md:w-5/6",
        "lg:w-10/12",
        "xl:w-11/12",
        "dark:bg-slate-400",
        "dark:text-white"
      );
      //create a div container for the image

      let imageContainer = document.createElement("div");
      countryCard.appendChild(imageContainer);
      imageContainer.classList.add("rounded-t-lg", "search-container");
      //create a image tag for the flag

      let flag = document.createElement("img");
      imageContainer.appendChild(flag);
      flag.classList.add(
        "rounded-t-lg",
        "h-30",
        "sm:h-40",
        "md:h-40",
        "w-full",
        "lg-max-w-md",
        "lg:h-40",
        "2xl:h-56",
        "cursor-pointer",
        "hover:scale-110",
        "transition",
        "duration-500"
      );
      flag.setAttribute("src", element.flags.png);

      flag.addEventListener("click", () => {
        //build an url with the country name
        //localStorage.clear();
        const countryUrl = `./country.html?country=${encodeURIComponent(
          element.name.common
        )}`;
        localStorage.setItem("selectedCountryFlag", element.flags.png);
        localStorage.setItem("selectedCountryName", element.name.common);
        localStorage.setItem("selectedOfficialName", element.name.official);
        localStorage.setItem("selectedCapitalName", element.capital);
        localStorage.setItem(
          "selectedPopulation",
          element.population.toLocaleString()
        );
        localStorage.setItem("selectedRegion", element.region);
        localStorage.setItem("selectedSubregion", element.subregion);

        Object.keys(element.currencies).forEach((element) => {
          localStorage.setItem("selectedCurrency", element);
        });

        localStorage.setItem("selectedLatitude", element.latlng[0]);
        localStorage.setItem("selectedLongitude", element.latlng[1]);
        localStorage.setItem("selectedFifa", element.fifa);
        localStorage.setItem("selectedTld", element.tld);
        // open the page in another tab
        window.open(countryUrl, "_blank");
      });

      //create a description container
      let descriptionContainer = document.createElement("div");
      countryCard.appendChild(descriptionContainer);
      descriptionContainer.classList.add("pl-10", "text-lg");

      //create an element for the country name

      let countryName = document.createElement("p");
      descriptionContainer.appendChild(countryName);
      countryName.textContent = element.name.common;
      countryName.classList.add(
        "font-bold",
        "text-2xl",
        "mt-8",
        "md:text-lg",
        "lg:text-lg",
        "dark:text-neutral-100"
      );

      //create two elements for population
      let population = document.createElement("p");
      descriptionContainer.appendChild(population);
      population.textContent = "Population:";
      population.classList.add(
        "mt-6",
        "font-bold",
        "md:text-base",
        "lg:text-base",
        "2xl:text-lg",
        "dark:text-neutral-100"
      );

      let populationNr = document.createElement("span");
      population.appendChild(populationNr);
      populationNr.textContent = element.population.toLocaleString();
      populationNr.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base"
      );

      // create two elements for region
      let region = document.createElement("p");
      descriptionContainer.appendChild(region);
      region.textContent = "Region:";
      region.classList.add("font-bold");

      let regionName = document.createElement("span");
      region.appendChild(regionName);
      regionName.textContent = element.region;
      regionName.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base"
      );

      //create two elements for capital
      let capital = document.createElement("p");
      descriptionContainer.appendChild(capital);
      capital.textContent = "Capital:";
      capital.classList.add("font-bold");

      let capitalName = document.createElement("span");
      capital.appendChild(capitalName);
      capitalName.textContent = element.capital;
      capitalName.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base",
        "text-[min(16px,5vw)]"
      );
    });
  } catch (error) {
    console.error(error);
  }
};

//fetch by region from API

const filterByRegion = async (region) => {
  try {
    const response = await fetch(mainUrl);
    const data = await response.json();
    const filteredData = data.filter((element) => {
      return element.region === region;
    });
    console.log(filteredData);

    filteredData.forEach((element) => {
      console.log(element.tld);
      //create a parent div container and add classes
      let countryCard = document.createElement("div");
      countryParent.appendChild(countryCard);
      countryCard.classList.add(
        "mt-10",
        "w-full",
        "sm:w-3/5",
        "m-auto",
        "bg-white",
        "pb-14",
        "rounded-t-lg",
        "md:w-5/6",
        "lg:w-10/12",
        "xl:w-11/12",
        "dark:bg-slate-400",
        "dark:text-white"
      );

      //create a div container for the image

      let imageContainer = document.createElement("div");
      countryCard.appendChild(imageContainer);
      imageContainer.classList.add("rounded-t-lg", "search-container");
      //create a image tag for the flag

      ///
      let flag = document.createElement("img");
      imageContainer.appendChild(flag);
      flag.classList.add(
        "rounded-t-lg",
        "h-30",
        "sm:h-40",
        "md:h-40",
        "w-full",
        "lg-max-w-md",
        "lg:h-40",
        "2xl:h-56",
        "cursor-pointer",
        "hover:scale-110",
        "transition",
        "duration-500"
      );

      flag.setAttribute("src", element.flags.png);

      flag.addEventListener("click", () => {
        //build an url with the country name
        //localStorage.clear();
        const countryUrl = `./country.html?country=${encodeURIComponent(
          element.name.common
        )}`;
        localStorage.setItem("selectedCountryFlag", element.flags.png);
        localStorage.setItem("selectedCountryName", element.name.common);
        localStorage.setItem("selectedOfficialName", element.name.official);
        localStorage.setItem("selectedCapitalName", element.capital);
        localStorage.setItem(
          "selectedPopulation",
          element.population.toLocaleString()
        );
        localStorage.setItem("selectedRegion", element.region);
        localStorage.setItem("selectedSubregion", element.subregion);

        Object.keys(element.currencies).forEach((element) => {
          localStorage.setItem("selectedCurrency", element);
        });

        localStorage.setItem("selectedLatitude", element.latlng[0]);
        localStorage.setItem("selectedLongitude", element.latlng[1]);
        localStorage.setItem("selectedFifa", element.fifa);
        localStorage.setItem("selectedTld", element.tld);
        // open the page in another tab
        window.open(countryUrl, "_blank");
      });

      //create a description container
      let descriptionContainer = document.createElement("div");
      countryCard.appendChild(descriptionContainer);
      descriptionContainer.classList.add("sm:pl-10", "sm:text-lg");

      //create an element for the country name

      let countryName = document.createElement("p");
      descriptionContainer.appendChild(countryName);
      countryName.textContent = element.name.common;
      countryName.classList.add(
        "font-bold",
        "text-2xl",
        "mt-8",
        "md:text-lg",
        "lg:text-lg"
      );

      //create two elements for population
      let population = document.createElement("p");
      descriptionContainer.appendChild(population);
      population.textContent = "Population:";
      population.classList.add(
        "mt-6",
        "font-bold",
        "md:text-base",
        "lg:text-base",
        "2xl:text-lg"
      );

      let populationNr = document.createElement("span");
      population.appendChild(populationNr);
      populationNr.textContent = element.population.toLocaleString();
      populationNr.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base"
      );

      // create two elements for region
      let region = document.createElement("p");
      descriptionContainer.appendChild(region);
      region.textContent = "Region:";
      region.classList.add("font-bold");

      let regionName = document.createElement("span");
      region.appendChild(regionName);
      regionName.textContent = element.region;
      regionName.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base"
      );

      //create two elements for capital
      let capital = document.createElement("p");
      descriptionContainer.appendChild(capital);
      capital.textContent = "Capital:";
      capital.classList.add("font-bold");

      let capitalName = document.createElement("span");
      capital.appendChild(capitalName);
      capitalName.textContent = element.capital;
      capitalName.classList.add(
        "font-normal",
        "leading-loose",
        "pl-2",
        "2xl:text-base"
      );
    });
  } catch (error) {
    console.error(error);
  }
};

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
