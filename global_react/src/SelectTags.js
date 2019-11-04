import {
  GetCountriesForSelect,
  GetOfficesForSelect,
  GetDepartmentsForSelect,
  GetEmployees
} from "./GetFunctions.js";

async function Country() {
  const countries = (await GetCountriesForSelect()).map(p => p.countryname);
  // console.log("rftgyhj", countries);

  const countrySelectTag = document.getElementById("country-select");

  countries.forEach(country =>
    countrySelectTag.insertAdjacentHTML(
      "beforeend",
      `<option value="${country}">${country}</option>`
    )
  );
}

async function Office() {
  const empTag = document.getElementById("emp-list");
  while (empTag.hasChildNodes()) {
    empTag.removeChild(empTag.firstChild);
  }
  CountryEmployees();
  const country = document.getElementById("country-select").value;
  const officeSelectTag = document.getElementById("office-select");
  const offices = (await GetOfficesForSelect(country)).map(o => o.officeName);

  officeSelectTag.innerHTML = "";
  offices.forEach(office =>
    officeSelectTag.insertAdjacentHTML(
      "beforeend",
      `<option value="${office}">${office}</option>`
    )
  );
}

async function Department() {
  const empTag = document.getElementById("emp-list");
  while (empTag.hasChildNodes()) {
    empTag.removeChild(empTag.firstChild);
  }
  OfficeEmployees();
  const country = document.getElementById("country-select").value;
  const office = document.getElementById("office-select").value;
  const departmentSelectTag = document.getElementById("department-select");
  const departments = (await GetDepartmentsForSelect(
    country,
    office.replace(" ", "-")
  )).map(d => d.departementName);
  // console.log(departments);
  departmentSelectTag.innerHTML = "";
  departments.forEach(department =>
    departmentSelectTag.insertAdjacentHTML(
      "beforeend",
      `<option value='${department}'>${department}</option>`
    )
  );
}

async function Employees() {
  document.getElementById("SearchingIn").textContent =
    "Search at Department Level";
  const searchCriteria = document.getElementById("search-box").value;
  const empTag = document.getElementById("emp-list");
  while (empTag.hasChildNodes()) {
    empTag.removeChild(empTag.firstChild);
  }

  const country = document.getElementById("country-select").value;
  const office = document.getElementById("office-select").value;
  const department = document.getElementById("department-select").value;

  const employees = await GetEmployees(
    country,
    office.replace(" ", "-"),
    department.replace(/ /g, "-")
  );

  console.log("Employees: ", employees);
  let empFiltered = employees.employee.filter(
    filtered =>
      filtered.lastName.includes(searchCriteria) ||
      filtered.firstName.includes(searchCriteria) ||
      filtered.email.includes(searchCriteria) ||
      (filtered.firstName + " " + filtered.lastName).includes(searchCriteria)
  );
  console.log(empFiltered);

  const ul = document.createElement("ul");

  for (let i = 0; i < empFiltered.length; i++) {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
      <span id="span-empNo">${empFiltered[i].empNo}</span>
      <span id="span-name">${empFiltered[i].firstName} ${empFiltered[i].lastName}</span>
      <span id="span-email">${empFiltered[i].email}</span>
      <span id="span-phonenr">${empFiltered[i].phoneNumber}</span>
      <span id="span-phonenrAbbr">${empFiltered[i].phoneNumberAbbr}</span>   
    </li>
    <div class="clear"></div>
    `
    );
  }

  empTag.appendChild(ul);
}

async function OfficeEmployees() {
  document.getElementById("SearchingIn").textContent = "Search at Office Level";
  const searchCriteria = document.getElementById("search-box").value;
  console.log(searchCriteria);
  const country = document.getElementById("country-select").value;
  const office = document.getElementById("office-select").value;
  const departments = await GetDepartmentsForSelect(
    country,
    office.replace(" ", "-")
  );

  const empTag = document.getElementById("emp-list");
  console.log(departments);
  let employees = [];
  let emp = [];
  let numOfEmployees = 0;

  for (let i = 0; i < departments.length; i++) {
    employees[i] = departments[i].employee;
  }

  const ul = document.createElement("ul");

  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].length; j++) {
      emp[numOfEmployees++] = employees[i][j];
      console.log(emp);
    }
  }
  
  let empFiltered = emp.filter(
    filtered =>
      filtered.lastName.includes(searchCriteria) ||
      filtered.firstName.includes(searchCriteria) ||
      filtered.email.includes(searchCriteria) ||
      (filtered.firstName + " " + filtered.lastName).includes(searchCriteria)
  );
  console.log(empFiltered);

  for (let i = 0; i < empFiltered.length; i++) {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
      <span id="span-empNo">${empFiltered[i].empNo}</span>
      <span id="span-name">${empFiltered[i].firstName} ${empFiltered[i].lastName}</span>
      <span id="span-email">${empFiltered[i].email}</span>
      <span id="span-phonenr">${empFiltered[i].phoneNumber}</span>
      <span id="span-phonenrAbbr">${empFiltered[i].phoneNumberAbbr}</span>   
    </li>
    <div class="clear"></div>
    `
    );
  }
  empTag.appendChild(ul);
}

async function CountryEmployees() {
  document.getElementById("SearchingIn").textContent =
    "Search at Country Level";

  const searchCriteria = document.getElementById("search-box").value;
  const country = document.getElementById("country-select").value;
  const office = await GetOfficesForSelect(country);
  const empTag = document.getElementById("emp-list");
  let employees = [];
  let deps = [];
  let numOfEmployees = 0;

  for (let i = 0; i < office.length; i++) {
    deps[i] = office[i].departement;
    for (let j = 0; j < deps[i].length; j++) {
      employees.push(deps[i][j]["employee"]);
    }
  }

  let newEmpArr = [];

  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].length; j++) {
      newEmpArr[numOfEmployees++] = employees[i][j];
    }
  }

  let empFiltered = newEmpArr.filter(
    filtered =>
      filtered.lastName.includes(searchCriteria) ||
      filtered.firstName.includes(searchCriteria) ||
      filtered.email.includes(searchCriteria) ||
      (filtered.firstName + " " + filtered.lastName).includes(searchCriteria)
  );
  const ul = document.createElement("ul");

  for (let i = 0; i < empFiltered.length; i++) {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <span id="span-empNo">${empFiltered[i].empNo}</span>
        <span id="span-name">${empFiltered[i].firstName} ${empFiltered[i].lastName}</span>
        <span id="span-email">${empFiltered[i].email}</span>
        <span id="span-phonenr">${empFiltered[i].phoneNumber}</span>
        <span id="span-phonenrAbbr">${empFiltered[i].phoneNumberAbbr}</span>   
      </li>
      <div class="clear"></div>
      `
    );
  }
  empTag.appendChild(ul);
}

export { 
  Country, 
  Office, 
  Department, 
  Employees, 
  OfficeEmployees 
};
