const GetCountry = async country => {
  return await fetch(
    `http://localhost:16479/countries/${country}/?AltTemplate=AsJson`
  ).then(result => result.json());
};
const GetCountriesForSelect = async () => {
  let a = await fetch(`http://localhost:16479/countries/?AltTemplate=AsJson`);
  a = await a.json();
  return a.countriesName;
};

const GetOffice = async (country, office) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetOfficesForSelect = country => {
  return fetch(
    `http://localhost:16479/countries/${country}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetDepartment = async (country, office, department) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetDepartmentsForSelect = (country, office) => {
  return fetch(
    `http://localhost:16479/countries/${country}/${office}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetEmployee = async (country, office, department, employee) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/${employee}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

export {
  GetCountry,
  GetCountriesForSelect,
  GetOffice,
  GetOfficesForSelect,
  GetDepartment,
  GetDepartmentsForSelect,
  GetEmployee
};
