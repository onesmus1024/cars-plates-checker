// Write an application that can take in two Kenyan license

'Kba 123A'
const carsBetween = (plate1, plate2) => {
    // convert the plates to uppercase
    plate1 = plate1.toUpperCase();
    plate2 = plate2.toUpperCase();
    // first split the code into three parts 1. kaa 2. 123 3. a
    let plate1Parts = plate1.split(' ');
    let plate2Parts = plate2.split(' ');
    // get the first part of the plate
    let plate1Code = plate1Parts[0];
    let plate2Code = plate2Parts[0];
    // get the second part of the plate without the last letter
    let plate1Number = plate1Parts[1].slice(0, -1);
    let plate2Number = plate2Parts[1].slice(0, -1);
    // get the last letter of the plate
    let plate1Letter = plate1Parts[1].slice(-1);
    let plate2Letter = plate2Parts[1].slice(-1);
    // difference between the last letter of the plate indicate 1000 cars
    let difference = Math.abs(plate2Letter.charCodeAt(0) - plate1Letter.charCodeAt(0));
    let carBtnLastLetter = difference * 1000;
    let carBtnNumber = Math.abs(plate2Number - plate1Number) * 1000;
    
    // get the last  letters of the first part of the plate
    let plate1CodeLastLetter = plate1Code.slice(-1);
    let plate2CodeLastLetter = plate2Code.slice(-1);
    // get the difference between the last 2 letters of the first part of the plate
    let codeDifference = Math.abs(plate2CodeLastLetter.charCodeAt(0) - plate1CodeLastLetter.charCodeAt(0));
    // get the number of cars between the two plates
    let carBtnCode = codeDifference * 24000;
    // get the second last letter of first part of the plate
    let plate1CodeSecondLastLetter = plate1Code.slice(-2, -1);
    let plate2CodeSecondLastLetter = plate2Code.slice(-2, -1);
    // get the difference between the second last letters of the first part of the plate
    let codeSecondLastLetterDifference = Math.abs(plate2CodeSecondLastLetter.charCodeAt(0) - plate1CodeSecondLastLetter.charCodeAt(0));
    // get the number of cars between the two plates
    let carBtnCodeSecondLastLetter = codeSecondLastLetterDifference * 24000 * 24;

    // get total number of cars between the two plates
    let totalCars = carBtnLastLetter + carBtnNumber + carBtnCode + carBtnCodeSecondLastLetter;

    return totalCars;

}

console.log(carsBetween('KaA 123A', 'Kba 123A'));