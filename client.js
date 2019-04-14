$( document ).ready( readyNow );

let employeeInfo = []
let wages = 0;

function readyNow(){
    $( '#submitButton' ).on( 'click', submitEEInfo );
}

function readyToCalculate(){

    let total = $( '#addUpTotal' );
    total.empty();
    total.append();
    console.log('jQuery is ready to go!');
}

function submitEEInfo(){
    //create employee object framework
    const employeeObject = {
        firstName: $( '#eeFNameInput' ).val(),
        lastName: $( '#eeLNameInput' ).val(),
        idNumber: $( '#eeID' ).val(),
        jobTitle: $( '#eeJobTitle' ).val(),
        annualSalary: $( '#eeAnnualSalary' ).val()
    }
    wages += $( '#eeAnnualSalary' ).val();
    employeeInfo.push( employeeObject );
    displayEEInfo( employeeInfo );
    gray();
}

function displayEEInfo(){
    let eeOut = $( '#eeOutput' );
    eeOut.empty();
    for( let i = 0; i < employeeInfo.length; i++){
        const employeeOut = `<li>${ employeeInfo[i].firstName },
            ${ employeeInfo[i].lastName }: 
            ${ employeeInfo[i].idNumber }:
            ${ employeeInfo[i].jobTitle }
            ${ employeeInfo[i].annualSalary }</li>`;
        eeOut.append( employeeOut );
    }
    
}

function gray() {
    let sum = 0
    console.log( sum += wages );
    
}
//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.

//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
//Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM. For Base mode, it does not need to remove that Employee's salary from the reported total.