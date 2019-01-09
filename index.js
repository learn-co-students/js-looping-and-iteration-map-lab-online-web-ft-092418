// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(name => name.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(obj => {
    const newObj = {}
    const nameArr = obj.split(" ")
    newObj["firstName"] = nameArr[0]
    newObj["lastName"] = nameArr[1]
    return newObj
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(obj => {
    return `${obj["name"]} is from ${obj["hometown"]}`
  })
}
