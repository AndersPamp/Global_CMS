import React from "react";
import {
  GetCountriesForSelect,
  GetOfficesForSelect,
  GetDepartmentsForSelect
} from "./GetFunctions.js";

async function Country() {
  const countries = (await GetCountriesForSelect()).map(p => p.countryname);
  console.log("rftgyhj", countries);

  const countrySelectTag = document.getElementById("country-select");

  countries.forEach(country =>
    countrySelectTag.insertAdjacentHTML(
      "beforeend",
      `<option value="${country}">${country}</option>`
    )
  );
}

async function Office(country) {}

async function Department(country, office) {}

export { Country, Office, Department };
