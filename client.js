$( document ).ready( readyNow );


let employeeInfo = []
let totalAmount = 0;
let monthlyAmount = 0;

//click button function
function readyNow(){
    $( '#submitButton' ).on( 'click', rightInput );
    $( '#deleteButton' ).on( 'click', deleteEEInfo );
}

//this function prevents blank fields
function rightInput(){
    let input = $( '#correctInput' );
    input.empty();
    if ( $( '#eeFNameInput' ).val() === null || $( '#eeFNameInput' ).val() === '' ) {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeLNameInput' ).val() === null || $( '#eeLNameInput' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeID' ).val() === null || $( '#eeID' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeJobTitle' ).val() === null || $( '#eeJobTitle' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeAnnualSalary' ).val() === null || $( '#eeAnnualSalary' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    submitEEInfo();
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
    //clears inputs
    $( '#eeFNameInput' ).val('');
    $( '#eeLNameInput' ).val('');
    $( '#eeID' ).val('');
    $( '#eeJobTitle' ).val('');
    $( '#eeAnnualSalary' ).val('');
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
        const employeeOut = 
        `<li>${ employeeInfo[i].firstName }
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
    total.append( '$' + monthlyAmount );
    redAlert();
}

function deleteEEInfo(){
    //inputs employee ID
    let wage = 0
    let newWage = 0
    let removeID = $( '#deleteID' ).val();
    //loop through employeeInfo and match ID
    for( let i =0; i<employeeInfo.length; i++){
        if( employeeInfo[i].idNumber === removeID ){
            //remove from display
            $(`li:contains('${ removeID }')`).remove();
            //delete the salary from monthly amount
            wage = employeeInfo[i].annualSalary;
            totalAmount -= wage;
            newWage = wage/12;
            monthlyAmount -= newWage;
            let total = $( '#addUpTotal' );
            total.empty();
            total.append( monthlyAmount );
            //removes employee object from employeeInfo array
            employeeInfo.pop( employeeInfo[i] );
                //clears delete input
        $( '#deleteID' ).val('')
        redAlert();
        }
    }
}

function redAlert(){
    if(monthlyAmount > 20000){  
        $('#addUpTotal').css('background-color', 'red')
    }
}

//The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.

//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
//Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM. For Base mode, it does not need to remove that Employee's salary from the reported total.