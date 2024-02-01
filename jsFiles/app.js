'use strict';

let formElement = document.getElementById("form");
let department = document.getElementById("dep");
let level = document.getElementById("lvl");
let img = document.getElementById("imgUrl");
let btn = document.getElementById("subBtn");

let empArr = [];

let Employee = function (fullName, Dep, level, img) {
    this.empId = null;
    this.fullName = fullName;
    this.Dep = Dep;
    this.level = level;
    this.img = img;
    this.salary = 1;
    empArr.push(this);
}

let content = document.getElementById("static_content");

Employee.prototype.calcSalary = function () {
    let max;
    let min;
    let sal = 1;
    if (this.level == "senior") {
        max = 2000;
        min = 1500;
        sal = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - (sal * .075);
    }
    else if (this.level == "mid-senior") {
        max = 1500;
        min = 1000;
        sal = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - (sal * .075);
    }
    else {
        max = 1000;
        min = 500;
        sal = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - (sal * .075);

    }
}




function saveData(arr) {
    let stringArr = JSON.stringify(arr);
    localStorage.setItem("Emloyee", stringArr);
}

Employee.prototype.render = function () {

    let card = document.createElement("div");
    card.className = "card";

    let empIcon = document.createElement("div");
    empIcon.className = 'icon';

    let emp_info = document.createElement("div");
    emp_info.className = "info";

    let img = document.createElement("img");
    img.className = 'img';
    img.src = this.img;
    empIcon.appendChild(img);

    let empName = document.createElement("p");
    empName.textContent = "Full name: " + this.fullName;
    emp_info.appendChild(empName);

    let Id = document.createElement("p");
    Id.textContent = "Id number: "+this.empId;
    emp_info.appendChild(Id);

    let empDep = document.createElement("p");
    empDep.textContent = "Departement: "+this.dep;
    emp_info.appendChild(empDep);

    let empLvl = document.createElement("p");
    empLvl.textContent = "Level: "+this.level;
    emp_info.appendChild(empLvl);

    let empSal = document.createElement("p");
    empSal.textContent = "Salry: "+this.salary;
    emp_info.appendChild(empSal);

    card.appendChild(empIcon);
    card.appendChild(emp_info);

    content.appendChild(card);

}


function renderNewEmp(emp)
{
    let newEmp = document.getElementById("dynamic_content");

    let card = document.createElement("div");
    card.className = "card";

    let empIcon = document.createElement("div");
    empIcon.className = 'icon';

    let emp_info = document.createElement("div");
    emp_info.className = "info";

    let img = document.createElement("img");
    img.className = 'img';
    img.src = emp.img;
    empIcon.appendChild(img);

    let empName = document.createElement("p");
    empName.textContent = "Full name: " + emp.fullName;
    emp_info.appendChild(empName);

    let Id = document.createElement("p");
    Id.textContent = "Id number: "+emp.empId;
    emp_info.appendChild(Id);

    let empDep = document.createElement("p");
    empDep.textContent = "Departement: "+emp.dep;
    emp_info.appendChild(empDep);

    let empLvl = document.createElement("p");
    empLvl.textContent = "Level: "+emp.level;
    emp_info.appendChild(empLvl);

    let empSal = document.createElement("p");
    empSal.textContent = "Salry: "+emp.salary;
    emp_info.appendChild(empSal);

    card.appendChild(empIcon);
    card.appendChild(emp_info);

    newEmp.appendChild(card);
}
// 
// 
Employee.prototype.randEmpId = function () {
    // source code =>  https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    this.empId = crypto.randomUUID().slice(32);
}

formElement.addEventListener("submit", submitHandler);

function submitHandler(event) {

    event.preventDefault();
    let fullName = event.target.fullName.value;
    let dep = event.target.dep.value;
    let level = event.target.lvl.value;
    let img = event.target.imgUrl.value;

    let obj = new Employee(fullName, dep, level, img);
    obj.randEmpId();
    obj.calcSalary();
    saveData(empArr);

    let retrievedData = localStorage.getItem("Emloyee");
    let objArr = JSON.parse(retrievedData);
    console.log(objArr);
    for (let i = empArr.length -1; i < objArr.length; i++) {
        renderNewEmp(objArr[i]);
    }
}
let emp1 = new Employee("Abd", "Adminstartion", 'Senior', "https://th.bing.com/th/id/OIP.HkIbhO8npHy_0T2VN9fTewHaMg?w=115&h=180&c=7&r=0&o=5&pid=1.7");
let emp2 = new Employee("ahmad", "Marketing", 'Mid-Senior', "https://th.bing.com/th/id/OIP.HkIbhO8npHy_0T2VN9fTewHaMg?w=115&h=180&c=7&r=0&o=5&pid=1.7");
let emp3 = new Employee("sara", "Development", 'Junior', "https://th.bing.com/th?q=Professional+Look+Photo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247");
let emp4 = new Employee("Amal", "Finance", 'Junior', "https://th.bing.com/th?q=Professional+Look+Photo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247");
let emp5 = new Employee("yasir", "Development", 'Junior', "https://th.bing.com/th/id/OIP.HkIbhO8npHy_0T2VN9fTewHaMg?w=115&h=180&c=7&r=0&o=5&pid=1.7");


prnt();
function prnt()
{
    for (let i = 0; i < empArr.length; i++) {
        empArr[i].randEmpId();
        empArr[i].calcSalary();
        empArr[i].render();
    }
}



