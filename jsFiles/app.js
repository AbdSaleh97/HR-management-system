'use strict';

let formElement = document.getElementById("form");
let department = document.getElementById("dep");
let level = document.getElementById("lvl");
let img = document.getElementById("imgUrl");
let btn = document.getElementById("subBtn");

let empArr =[];

let Employee = function (fullName, Dep, level, img) {
    this.empId = null;
    this.fullName = fullName;
    this.Dep = Dep;
    this.level = level;
    this.img = img;
    this.salary = 1;
    empArr.push(this);
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

formElement.addEventListener("submit", submitHandler);

function submitHandler(event) {

    event.preventDefault();
    let fullName = event.target.fullName.value;
    let dep = event.target.dep.value;
    let level = event.target.lvl.value;
    let img = event.target.imgUrl.value;

    let obj = new Employee(fullName, dep, level, img);
    randEmpId(obj);
    obj.calcSalary();
    saveData(empArr);
}

function saveData(arr)
{
    let stringArr = JSON.stringify(arr);
    localStorage.setItem("Emloyee", stringArr);
}

function randEmpId(emp) {
    // source code =>  https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
    emp.empId = crypto.randomUUID().slice(32);
}


