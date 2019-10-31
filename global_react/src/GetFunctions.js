const GetCountry = async country => {
  return await fetch(
    `http://localhost:16479/countries/${country}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetOffice = async (country, office) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetDepartment = async (country, office, department) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/?AltTemplate=AsJson`
  ).then(result => result.json());
};

const GetEmployee = async (country, office, department, employee) => {
  return await fetch(
    `http://localhost:16479/countries/${country}/${office}/${department}/${employee}/?AltTemplate=AsJson`
  ).then(result => result.json());
};
export { GetCountry, GetOffice, GetDepartment, GetEmployee };
