$( document ).ready( readyNow );

let employeeInfo = []
let totalAmount = 0;
let monthlyAmount = 0;

//click function
function readyNow(){
    $( '#submitButton' ).on( 'click', submitEEInfo );
}

//submit employee info function
function submitEEInfo(){
    //create employee object framework
    const employeeObject = {
        firstName: $( '#eeFNameInput' ).val(),
        lastName: $( '#eeLNameInput' ).val(),
        idNumber: $( '#eeID' ).val(),
        jobTitle: $( '#eeJobTitle' ).val(),
        annualSalary: $( '#eeAnnualSalary' ).val()
    }
    //starts wage calculation
    readyToCalculate();
    //puts our created object in the array
    employeeInfo.push( employeeObject );
    //starts our display function
    displayEEInfo( employeeInfo );
}

//display function
function displayEEInfo(){
    //finds location for the employ information output
    let eeOut = $( '#eeOutput' );
    eeOut.empty();
    //gets employee info from the array and prints in in the location above
    for( let i = 0; i < employeeInfo.length; i++){
        const employeeOut = `<li>${ employeeInfo[i].firstName }
            ${ employeeInfo[i].lastName }
            # ${ employeeInfo[i].idNumber }
            ${ employeeInfo[i].jobTitle }
            $ ${ employeeInfo[i].annualSalary }</li>`;
        eeOut.append( employeeOut );
    }    
}

//calculates the monthly amount of wages
function readyToCalculate(){
    //grabs the inputted wages
    let newWage = $( '#eeAnnualSalary' ).val();
    let wage = Number( newWage );
    //adds the wages up and divides it into monthly amounts
    totalAmount += wage;
    monthlyAmount = totalAmount/12;
    //outputs the monthly amount
    let total = $( '#addUpTotal' );
    total.empty();
    total.append( monthlyAmount );
}

//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.

//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
//Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM. For Base mode, it does not need to remove that Employee's salary from the reported total.