
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
  const ul = document.createElement("ul");
  employees.employee.forEach(emp =>
    ul.insertAdjacentHTML(
      "beforeend",
      `
  <li>
  <div>${emp.empNo}</div>
  <div>${emp.firstName} ${emp.lastName}</div>
  <div>${emp.email}</div>
  </li>`
    )
  );
  empTag.appendChild(ul);
}

async function OfficeEmployees()
{
  const country = document.getElementById("country-select").value;
  const office = document.getElementById("office-select").value;
  const departments = await GetDepartmentsForSelect(country, office.replace(" ", "-"));
  const empTag = document.getElementById("emp-list");
  console.log(departments);
  let employees = [];
  for(let i = 0; i < departments.length; i++)
  {
    employees[i] = departments[i].employee;
  }
  const ul = document.createElement("ul");
  
  for(let i = 0; i < employees.length; i++)
  {
    for(let j = 0; j < employees[i].length; j++)
    {
      
      ul.insertAdjacentHTML(
        "beforeend",
        `
    <li>
    <div>${employees[i][j].empNo}</div>
    <div>${employees[i][j].firstName} ${employees[i][j].lastName}</div>
    <div>${employees[i][j].email}</div>
    </li>`
      )
    }
   
  }
  empTag.appendChild(ul);
}

async function CountryEmployees()
{
  const country = document.getElementById("country-select").value;
  const office = await GetOfficesForSelect(country);
  const empTag = document.getElementById("emp-list");
  let employees = [];
  let deps = [];
  let numOfEmployees = 0;
  for(let i = 0; i < office.length; i++)
  {
    deps[i] = office[i].departement;
    for(let j = 0; j < deps[i].length; j++)
    {
      employees.push(deps[i][j]['employee']);
    }
  }
  let newEmpArr = [];
  for(let i = 0; i < employees.length; i++)
  {
    for(let j = 0; j < employees[i].length; j++)
    {
      newEmpArr[numOfEmployees++]= employees[i][j];
    }
  }
  const ul = document.createElement("ul");
  for(let i = 0; i < newEmpArr.length; i++)
  { 
      ul.insertAdjacentHTML(
        "beforeend",
        `
    <li>
    <div>${newEmpArr[i].empNo}</div>
    <div>${newEmpArr[i].firstName} ${newEmpArr[i].lastName}</div>
    <div>${newEmpArr[i].email}</div>
    </li>`
      )
    }
  empTag.appendChild(ul);
}
export { Country, Office, Department, Employees, OfficeEmployees };
