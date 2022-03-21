const employee = {
    name: "Sam" ,
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
}
console.log(updateEmployeeWithKeyAndValue(employee, name, "Sam"));
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee.streetAddress = "12 Broadway";
   return employee;
   }

   function deleteFromEmployeeByKey(employee, key) {
       const newEmployee = Object.assign({}, employee);
       delete newEmployee[key];
       return newEmployee;
       }

       function destructivelyDeleteFromEmployeeByKey(employee, key) {
           delete employee[key];
           return employee;
       }