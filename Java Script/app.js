'use strict'

let staff=[]
let employeeLevel=[]
function Employee(employeeId,fullName,departmentName,level,imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.departmentName=departmentName;
    this.level = level;
    this.imageUrl= imageUrl;
    staff.push(this);
}
employeeLevel=["Junior","Mid-Senior","Senior"]

Employee.prototype.salary = function() {
    for (let i=0; i<employeeLevel.length; i++)
    if (this.level === employeeLevel[i]){
        this.salary = Math.floor(Math.random() * ((500*(i+2)) - (500*(i+1)))) + (500*(i+1));
        this.salary-= this.salary*0.075;
        return this.salary=Math.floor(this.salary)
    }
}
document.write("<section>Full name : Salary\n</section>")

Employee.prototype.printReqInfo = function () { document.write(`<section>${this.fullName}: ${this.salary()}</section>`)}


const ghazi_Samer = new Employee (1000, "Ghazi Samer", "Administration", "Senior","url1");
const lana_Ali = new Employee (1001, "Lana Ali", "Finance", "Senior","url2");
const tamara_Ayoub = new Employee (1002, "Tamara Ayoub", "Marketing", "Senior","url3");
const safi_Walid = new Employee (1003, "Safi Walid", "Administration", "Mid-Senior","url4");
const omar_Zaid = new Employee (1004, "Omar Zaid", "Development", "Senior","url5");
const rana_Saleh = new Employee (1005, "Rana Saleh", "Development", "Junior","url6");
const hadi_Ahmad = new Employee (1006, "Hadi Ahmad", "Finance", "Mid-Senior","url7");

printInfo();


// Functions:
function printInfo () {
    for (let i=0; i<staff.length;i++){
        staff[i].printReqInfo()
    }}

// Emplyee ID:
// function employeeIdNumber (){
    
// }
// Employee department:
// let department = function(depFirstLetter) {
//     let arr=["Administration","Marketing","Development","Finance"];
//     if (depFirstLetter=="A") {
//         return arr[0];
//     }
//     else if (depFirstLetter=="M") {
//         return arr[1];
//     }
//     else if (depFirstLetter=="D") {
//         return arr[2];
//     }
//     else if (depFirstLetter=="F") {
//         return arr[3]
//     }
// }
