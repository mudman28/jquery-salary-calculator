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
    if ( $( '#eeId' ).val() === null || $( '#eeId' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeLNameInput' ).val() === null || $( '#eeLNameInput' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeFNameInput' ).val() === null || $( '#eeFNameInput' ).val() === '' ) {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeJobTitle' ).val() === null || $( '#eeJobTitle' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else if ( $( '#eeAnnualSalary' ).val() === null || $( '#eeAnnualSalary' ).val() === '') {
        input.append('Please Complete All Fields Before Submitting')
    }
    else{
        submitEEInfo();
    }
}

//submit employee info function
function submitEEInfo(){
    //create employee object framework
    const employeeObject = {
        idNumber: $( '#eeId' ).val(),
        lastName: $( '#eeLtNameInput' ).val(),
        firstName: $( '#eeFtNameInput' ).val(),
        jobTitle: $( '#eeJobTitle' ).val(),
        annualSalary: $( '#eeAnnualSalary' ).val()
    }
    //starts wage calculation
    readyToCalculate();
    //puts our created object in the array
    employeeInfo.push( employeeObject );
    //clears inputs
    $( '#eeId' ).val('');
    $( '#eeLtNameInput' ).val('');
    $( '#eeFtNameInput' ).val('');
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
        eeOut.append(
        `<tr><td>#${ employeeInfo[i].idNumber }</td>
        <td>${ employeeInfo[i].lastName }</td>
        <td>${ employeeInfo[i].firstName }</td>
        <td>${ employeeInfo[i].jobTitle }</td>
        <td>$${ employeeInfo[i].annualSalary }</td></tr>` );
    }    
}

//calculates the monthly amount of wages
function readyToCalculate(){
    //grabs the wage amounts
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
    let removeID = $( '#deleteId' ).val();
    //loop through employeeInfo and match ID
    for( let i =0; i<employeeInfo.length; i++){
        if( employeeInfo[i].idNumber === removeID ){
            //remove from display
            $(`tr:contains('${ removeID }')`).remove();
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

