
const GetCountry = (country) => {
    return fetch(`http://localhost:16479/${country}/?AltTemplate=AsJson`).then(result => result.json());    
}

const GetOffice = async (country, office) => {
    return await fetch(`http://localhost:16479/${country}/${office}/?AltTemplate=AsJson`)
}

const GetDepartment = async (country, office, department) => {
    return await fetch(`http://localhost:16479/${country}/${office}/${department}/?AltTemplate=AsJson`)
}

const GetEmployee = async (country, office, department, employee) => {
    return await fetch(`http://localhost:16479/${country}/${office}/${department}/${employee}/?AltTemplate=AsJson`)
}

export {GetCountry, GetOffice, GetDepartment, GetEmployee};