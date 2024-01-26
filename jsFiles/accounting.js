

let employee = JSON.parse(localStorage.getItem("Emloyee"));

console.log(employee);

let adminRow = document.getElementById("Administration");
let marketingRow = document.getElementById("Marketing");
let devRow = document.getElementById("Development");
let finanRow = document.getElementById("Finance");
let toatlRow = document.getElementById("totalRow");


function empNum(arr) {

    let admDepTotal = 0;
    let markDepTotal = 0;
    let devDepTotal = 0;
    let finDepTotal = 0;

    let empTotal = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].Dep) {

            case 'Administration':
                admDepTotal++;
                empTotal++;
                break;

            case 'Marketing':
                markDepTotal++;
                empTotal++;
                break;

            case 'Development':
                devDepTotal++;
                empTotal++;
                break;

            case 'Finance':
                finDepTotal++;
                empTotal++;
                break;
        }
    }
    return {
        admDepTotal,
        markDepTotal,
        devDepTotal,
        finDepTotal,
        empTotal
    };
}

function totalSalary(arr) {

    let admDepSal = 0;
    let markDepSal = 0;
    let devDepSal = 0;
    let finDepSal = 0;

    let empTotalSal = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].Dep) {

            case 'Administration':
                admDepSal += arr[i].salary;
                empTotalSal += arr[i].salary;
                break;

            case 'Marketing':
                markDepSal += arr[i].salary;
                empTotalSal += arr[i].salary;
                break;

            case 'Development':
                devDepSal += arr[i].salary;
                empTotalSal += arr[i].salary;
                break;

            case 'Finance':
                finDepSal += arr[i].salary;
                empTotalSal += arr[i].salary;
                break;
        }

    }
    return {
        admDepSal,
        markDepSal,
        devDepSal,
        finDepSal,
        empTotalSal,
    };

}

let totalEmpSal = totalSalary(employee);
let empNo = empNum(employee);

function avg(arr) {
    let adminDepAvg = 0;
    let markDepAvg = 0;
    let devDepAvg = 0;
    let finDepAvg = 0;

    let totalDepAvg = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].Dep) {

            case 'Administration':
                adminDepAvg = totalEmpSal.admDepSal / empNo.admDepTotal;
                break;

            case 'Marketing':
                markDepAvg = totalEmpSal.markDepSal / empNo.markDepTotal;
                break;

            case 'Development':
                devDepAvg = totalEmpSal.devDepSal / empNo.devDepTotal;
                break;

            case 'Finance':
                finDepAvg = totalEmpSal.finDepSal / empNo.finDepTotal;
                break;
        }
    }
    totalDepAvg = (adminDepAvg + markDepAvg + devDepAvg + finDepAvg) / 4;

    return { adminDepAvg, markDepAvg, devDepAvg, finDepAvg, totalDepAvg };
}

let average = avg(employee);

function tableRender() {

    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');

    cell1.textContent = empNo.admDepTotal;
    adminRow.appendChild(cell1);

    cell2.textContent = totalEmpSal.admDepSal;
    adminRow.appendChild(cell2);

    cell3.textContent = average.adminDepAvg;
    adminRow.appendChild(cell3);


    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');

    cell4.textContent = empNo.markDepTotal;
    marketingRow.appendChild(cell4);

    cell5.textContent = totalEmpSal.markDepSal;
    marketingRow.appendChild(cell5);

    cell6.textContent = average.markDepAvg;
    marketingRow.appendChild(cell6);


    let cell7 = document.createElement('td');
    let cell8 = document.createElement('td');
    let cell9 = document.createElement('td');

    cell7.textContent = empNo.devDepTotal;
    devRow.appendChild(cell7);

    cell8.textContent = totalEmpSal.devDepSal;
    devRow.appendChild(cell8);

    cell9.textContent = average.devDepAvg;
    devRow.appendChild(cell9);


    let c1 = document.createElement('td');
    let c2 = document.createElement('td');
    let c3 = document.createElement('td');

    c1.textContent = empNo.finDepTotal;
    finanRow.appendChild(c1);

    c2.textContent = totalEmpSal.finDepSal;
    finanRow.appendChild(c2);

    c3.textContent = average.finDepAvg;
    finanRow.appendChild(c3);


    let ce = document.createElement('td');
    let c= document.createElement('td');
    let cel = document.createElement('td');

    ce.textContent = empNo.empTotal;
    toatlRow.appendChild(ce);

    c.textContent = totalEmpSal.empTotalSal;
    toatlRow.appendChild(c);

    cel.textContent = average.totalDepAvg;
    toatlRow.appendChild(cel);
}

tableRender();