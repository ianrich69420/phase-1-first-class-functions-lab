// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0, 2);

const returnLastTwoDrivers = array => array.slice(array.length - 2, array.length);

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = integer => () => integer * 5

const var1 = createFareMultiplier()

const fareDoubler = var1 => var1 * 2

const fareTripler = var1 => var1 * 3

function selectDifferentDrivers (arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}
