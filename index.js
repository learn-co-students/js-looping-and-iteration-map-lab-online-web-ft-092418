// Code your solution in this file.

function lowerCaseDrivers(driverArray) {
    return driverArray.map(function(drivers) {
        return drivers.toLowerCase();
    });
}

function nameToAttributes(driverArray) {
    return driverArray.map(function(drivers){
        const driversFirstName = drivers.split(" ")[0];
        const driversLastName = drivers.split(" ")[1];

        return { firstName: driversFirstName, lastName: driversLastName };
    });
}

function attributesToPhrase(driverArray) {
    return driverArray.map(function(drivers) {
        return `${drivers.name} is from ${drivers.hometown}`;
    });
}