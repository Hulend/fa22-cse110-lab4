let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

function loop(variable) {
    for(const prop in variable) {
        (prop.charAt(0) == 'r' || variable[prop] % 2 === 1) ? 
        console.log(variable[prop]):
        null
    }
} 

loop(statistics);