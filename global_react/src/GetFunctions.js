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

const GetOfficesForSelect = async country => {
  let a = await fetch(
    `http://localhost:16479/countries/${country}/?AltTemplate=AsJson`
  );
  a = await a.json();
  return a.office;
};

const GetDepartment = async (country, office, department) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetDepartmentsForSelect = async (country, office) => {
  // console.log(country, office);
  let a = await fetch(
    `http://localhost:16479/countries/${country}/${office.replace(
      " ",
      "-"
    )}/?AltTemplate=AsJson`
  );
  a = await a.json();
  // console.log(a);
  return a.departement;
};

const GetEmployee = async (country, office, department, employee) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/${employee}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetEmployees = async (country, office, department) => {
  let a = await fetch(
    `http://localhost:16479/countries/${country}/${office.replace(
      " ",
      "-"
    )}/${department.replace(/ /g, "-")}/?AltTemplate=AsJson`
  );
  a = await a.json();
  return a;
};

export {
  GetCountry,
  GetCountriesForSelect,
  GetOffice,
  GetOfficesForSelect,
  GetDepartment,
  GetDepartmentsForSelect,
  GetEmployee,
  GetEmployees
};
