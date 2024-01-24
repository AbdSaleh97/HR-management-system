'use strict';

let formElement = document.getElementById("form");
let department = document.getElementById("dep");
let level = document.getElementById("lvl");
let img = document.getElementById("imgUrl");
let btn = document.getElementById("subBtn");

let Employee = function (fullName, Dep, level, img) {
    this.empId = null;
    this.fullName = fullName;
    this.Dep = Dep;
    this.level = level;
    this.img = img;
    this.salary = 1;
}

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

Employee.prototype.render = function () {
    let main = document.getElementById("main");

    let card = document.createElement("div");

    let imgDiv = document.createElement("img");
    imgDiv.src = this.img;
    imgDiv.alt = "img";
    imgDiv.style.width = '100%';
    imgDiv.style.borderRadius = '50%';
    imgDiv.style.marginBottom = '15px';
    
    card.appendChild(imgDiv);
    console.log(imgDiv);

    let name = document.createElement("p");
    name.innerText = "Name: " + this.fullName;
    card.appendChild(name);
    console.log(name);


    let id = document.createElement("p");
    id.innerText = "ID: " + this.empId;
    card.appendChild(id);
    console.log(id);

    let department = document.createElement("p");
    department.innerText = "Department: " + this.Dep;
    card.appendChild(department);
    console.log(department);

    let level = document.createElement("p");
    level.innerText = "Level: " + this.level;
    card.appendChild(level);
    console.log(imgDiv);

    let salary = document.createElement("p");
    salary.innerText = "Salary: " + this.salary;
    card.appendChild(salary);
    console.log(salary);

    card.style.maxWidth = '300px';
    card.style.margin = '20px';
    card.style.padding = '20px';
    card.style.backgroundColor = '#fff';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    card.style.textAlign = 'center';

    main.appendChild(card);
};

formElement.addEventListener("submit", submitHandler);

function submitHandler(event) {

    event.preventDefault();
    console.log(event);
    let fullName = event.target.fullName.value;
    let dep = event.target.dep.value;
    let level = event.target.lvl.value;
    let img = event.target.imgUrl.value;

    
    let obj = new Employee(fullName, dep, level, img);
    randEmpId(obj);
    obj.calcSalary();
    obj.render();

}



function randEmpId(emp) {
    // source code =>  https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    emp.empId = crypto.randomUUID().slice(32);
}


