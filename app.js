'use strict'

let staff=[] // array of instances

// creating a constractor to add the employees info
function Employee(employeeId,fullName,departmentName,level,imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.departmentName=departmentName;
    this.level = level;
    this.imageUrl= imageUrl;
    staff.push(this);
}

// calculating the salary depending on the employee level
// modifing the code to meet the best practices
Employee.prototype.salary = function() {
    (this.level.toLowerCase()==="senior") ? this.salary = getRndInteger (1500, 2008) :
        (this.level.toLowerCase()==="mid-senior") ? this.salary = getRndInteger(1000, 1500):
            this.salary =getRndInteger(500,1000);
            return this.salary
}

// calculating the net salary with a tax of 7.5%
Employee.prototype.netSalary = function() {
    this.netSalary=math.floor((this.salary * 0.075)+this.salary);
}

// creating the instances
const ghazi_Samer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
const lana_Ali = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
const tamara_Ayoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
const safi_Walid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
const omar_Zaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
const rana_Saleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
const hadi_Ahmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");


staff.forEach(staff => {

    // creating the parent
    let cards=document.createElement("div");
    cards.setAttribute("class","card");

    // creating the child (img)
    let cardimg=document.createElement("img");
    cardimg.src=staff.imageUrl;
    cardimg.style="width:100%;";
    cardimg.alt=`${staff.fullName}`;

    // creating the child (div)
    let card=document.createElement("div");
    card.setAttribute("class","container");
    
    // rendering the required info
    let cardTitle=document.createElement("h4");
    cardTitle.textContent=`Name: ${staff.fullName}- ID: ${staff.employeeId}`;
    let cardText=document.createElement("p");
    cardText.textContent=`Department: ${staff.departmentName} - Level: ${staff.level}`;
    let cardSalary = document.createElement("p");
    cardSalary.textContent=`Salary: ${staff.salary()}`;

    // adding the child to the parent
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardSalary);
    // adding the child to the parent
    cards.appendChild(cardimg);
    cards.appendChild(card);
    let main=document.getElementsByTagName("main");
    main[0].appendChild(cards);



});
// Funcions:
// https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

