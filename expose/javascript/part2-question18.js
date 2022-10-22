function repeatedCalls(callback) {
    setInterval(callback, 1000);
}

function queryTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

repeatedCalls(queryTime);