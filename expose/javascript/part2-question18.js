function showTime(){
    let d = new Date()
    let time = d.toLocaleTimeString();
    console.log(time)
}

let intervalID = setInterval(showTime, 1000);
showTime()
