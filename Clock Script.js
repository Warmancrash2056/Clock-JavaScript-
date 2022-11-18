function showTime(){
    var get_exact_time = new Date();
    var h = get_exact_time.getHours(); // 0 - 23
    var m = get_exact_time.getMinutes(); // 0 - 59
    var s = get_exact_time.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    /* Conditional Ternary takes a three operands and checks if the condition is true to the second if not the third value is assigned to the first */
    /* '0' add a digit for the clock for design purposes. */
    h = (h < 10) ? "0" + h : h; /* Ternary operator jus reassign to the same value*/
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();