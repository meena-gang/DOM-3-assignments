const employeeForm = document.getElementsByTagName("form");

employeeForm[0].addEventListener('submit', takeData);
let employeeData = [];
let tableBody = document.getElementById('tBody');
let filter = document.getElementById('filter');
filter.addEventListener('change',filterByDep);


function takeData(event){
    

    event.preventDefault();

    let eName = document.getElementById("name").value;
    let employeeID = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    let experience = document.getElementById("exp").value;
    let emailID = document.getElementById("email").value;
    let mbl = document.getElementById("mbl").value;
    let role;
    
    

    if(experience > 5){
        role = "Senior";
    }
    else if(experience > 2 && experience < 5){
        role = "Junior";
    }
    else{
        role = "Fresher";
    }
    
    let obj = {
        eName,
        employeeID,
        department,
        experience,
        emailID,
        mbl,
        role
    }
    employeeData.push(obj);
    displayData(employeeData);
}
    function displayData(data){

        tableBody.innerHTML = "";

        if(data.length == 0 || data[0].eName === ''){
            let noData = document.createElement('p');
            noData.textContent = "No Data is availale or Please enter vaild details";

            let noDataContent = document.getElementById("noData");
            noDataContent.append(noData);
        }else{
            data.forEach((ele,index) => {
                
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.textContent = ele.eName;
                let td2 = document.createElement('td');
                td2.textContent = ele.employeeID;
                let td3 = document.createElement('td');
                td3.textContent = ele.department;
                let td4 = document.createElement('td');
                td4.textContent = ele.experience;
                let td5 = document.createElement('td');
                td5.textContent = ele.emailID;
                let td6 = document.createElement('td');
                td6.textContent = ele.mbl;
                let td7 = document.createElement('td');
                td7.textContent = ele.role;
                let td8 = document.createElement('button');
                td8.textContent = "Delete";
                tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
                tableBody.append(tr);
                td8.addEventListener('click', function(){
                    deleteRow(index);
                })
            })
        }
    }
    function deleteRow(i){
        employeeData.splice(i,1);
        displayData(employeeData);
    }
    function filterByDep(){
        let data = employeeData.filter((ele) => ele.department == filter.value)
        console.log(employeeData,data);
        displayData(data);
    }