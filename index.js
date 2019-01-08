// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let driverSplit = driver.split(" ")
    return {firstName: driverSplit[0], lastName:driverSplit[1]}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver["name"]} is from ${driver["hometown"]}`)
}
