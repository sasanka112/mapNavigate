



var currentdate = new Date();

var current_time = currentdate.toLocaleTimeString('en-US', { hour12: true, 
                                             hour: "numeric", 
                                             minute: "numeric"});

if(current_time.indexOf("PM")>-1)
    current_time = current_time.replace("PM"," p.m.");
else
    current_time = current_time.replace("AM"," a.m.");

var current_year = currentdate.getFullYear();



var monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var mnth_name  = monthNames[currentdate.getMonth()];

var current_day = currentdate.getDate();



$("#top-date,#top-date-two").html(current_day+" "+mnth_name);

$("#bottom-date,#bottom-date-two").html(current_time);

$("#order-no,#order-no-two").html("117");

$("#paid-on-date").html(current_day +" "+mnth_name+","+current_time);

if(current_day<10){
    current_day = "0"+current_day;
}

$("#main-date").html(mnth_name +" "+current_day+"," +current_year);

$("div#use-it").click(function(){
    $("#dim-the-screen").removeClass("hide");
    $("#use-now-pop-up").removeClass("hide");
});

$("div#get-order-no").click(function(){
    var order_no = prompt("Please enter your order number","127");
    $("#order-no,#order-no-two").html(order_no);
});


$("#use-now-pop-up").click(function(){
    $("#wrapper").addClass("hide");
    $("#wrapper-two").removeClass("hide");
    $(this).addClass("hide");

    var fiveMinutes = 60 * 2,
        display = $('#time-count');
    startTimer(fiveMinutes, display);
});




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ?  minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

