// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lower = drivers.map(name => name.toLowerCase())
    return lower
}

function nameToAttributes(drivers) {
    let hash = drivers.map(name => 
        Object.assign({}, { firstName: name.split(' ')[0], lastName: name.split(' ')[1] }))      
    return hash
}

function attributesToPhrase(drivers) {
    const sentence = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
    return sentence
}