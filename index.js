
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    console.log(arrayOfDrivers)
    return arrayOfDrivers.slice(0,2)
};

const returnLastTwoDrivers = function(listOfDrivers) {
    return listOfDrivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (num) => {
     return (fair) => {
        return (num * fair)
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, callback) {
    return callback(drivers);
};