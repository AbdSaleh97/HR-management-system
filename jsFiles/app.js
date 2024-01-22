'use strict';

let empArr = [];

let Employee = function(empId,fullName,Dep,level,img){
    this.empId = empId;
    this.fullName = fullName;
    this.Dep = Dep;
    this.level = level;
    this.img = img;
    this.salary = 1;
    empArr.push(this);
}

Employee.prototype.calcSalary = function()
{
    let max;
    let min;
    let sal = 1;
    if (this.level == "senior") {
        max = 2000;
        min = 1500;
        sal= Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - ( sal * .075);
    }
    else if (this.level == "mid-senior") {
        max = 1500;
        min = 1000;
        sal= Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - ( sal * .075);
        
    }
    else{
        max = 1000;
        min = 500;
        sal= Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = sal - ( sal * .075);
        
    }
}
document.write(`
<table border="1">
    <tr>
        <th>Employee ID</th>
        <th>Full Name</th>
        <th>Department</th>
        <th>Level</th>
        <th>Salary</th>
    </tr>
`);
Employee.prototype.render = function()
{   

document.write(`
<tr>
    <td>${this.empId}</td>
    <td>${this.fullName}</td>
    <td>${this.Dep}</td>
    <td>${this.level}</td>
    <td>$${this.salary}</td>
</tr>
`);
}

let emp1 = new Employee(12,"abdelrahman" , "Administration","senior","img1.jpg");
let emp2 = new Employee(2, "Jane Smith", "Marketing", "mid-senior", "img2.jpg");
let emp3 = new Employee(3, "Bob Johnson", "Finance", "Junior", "img3.jpg");
let emp4 = new Employee(4, "Alice Johnson", "HR", "senior", "img4.jpg");
let emp5 = new Employee(5, "Eva Williams", "Development", "mid-senior", "img5.jpg");


for (let index = 0; index < empArr.length; index++) {
   empArr[index].calcSalary();
   empArr[index].render();
}