
//360 X 620

var dynamic_name = "";
    var dynamic_price = "";
    var dynamic_counter = "";
    var dynamic_quantity = "";


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
    var counter_type_gb = $("#dynamic-counter-type").val();
    $("body").attr("class","");
    if(counter_type_gb == "ovenfresh")
        $("body").addClass("image-ovenfresh");
    else if(counter_type_gb == "chats")
        $("body").addClass("image-chats");
    else if(counter_type_gb == "viva")
        $("body").addClass("image-viva");
    else if(counter_type_gb == "ke-food")
        $("body").addClass("image-ke-food");
    else if(counter_type_gb == "ovenfresh-pay"){
        $("#wrapper-two div").addClass("hide");
        $("#wrapper-two #time-count").removeClass("hide");
        $("#wrapper-two #top-date-two").removeClass("hide");
        $("#wrapper-two #item-quntity-next").removeClass("hide");
        $("#wrapper-two #item-price-next").removeClass("hide");
        $("#wrapper-two #item-name-next").text($("#wrapper-two #item-price-next").text());
        $("#wrapper-two #item-name-next").removeClass("hide");
        $("#wrapper-two #bottom-date-two").removeClass("hide");
        $("body").addClass("image-ovenfresh-pay");
    }
    else if(counter_type_gb == "chat-pay"){
        $("#wrapper-two div").addClass("hide");
        $("#wrapper-two #time-count").removeClass("hide");
        $("#wrapper-two #top-date-two").removeClass("hide");
        $("#wrapper-two #item-quntity-next").removeClass("hide");
        $("#wrapper-two #item-price-next").removeClass("hide");
        $("#wrapper-two #item-name-next").text($("#wrapper-two #item-price-next").text());
        $("#wrapper-two #item-name-next").removeClass("hide");
        $("#wrapper-two #bottom-date-two").removeClass("hide");
        $("body").addClass("image-chat-pay");
    }
    else
        $("body").addClass("image-sodexo");
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


$("#dynamic-submit").click(function(){
    dynamic_name = $("#dynamic-name").val();
    dynamic_price = $("#dynamic-price").val();
    dynamic_counter = $("#dynamic-counter").val();
    dynamic_quantity = $("#dynamic-quantity").val();
    dynamic_price = parseInt(dynamic_price) * parseInt(dynamic_quantity);
    $("#wrapper").removeClass("hide");
    $("#dynamic-form").addClass("hide");

    $("#item-price-next,#item-price-next-2").html( "&#x20b9; "+dynamic_price);
    $("#item-price").html( dynamic_price);
    $("#item-name").html(dynamic_name +" x "+dynamic_quantity);
    $("#item-name-next").html(dynamic_name);
    $("#item-counter").html(dynamic_counter);
    $("#item-counter-next").html(dynamic_counter.substring(8));
    $("#item-quntity-next").html("x "+dynamic_quantity);
});



var availableTags = [];

for(var i=0;i<menu_item_data.length;i++)
    availableTags.push(menu_item_data[i].counter);


    $( "#dynamic-counter" ).autocomplete({
      source: availableTags
    });






$('body').on('click', '#ui-id-1 li', function() {
    dynamic_counter = $("#dynamic-counter").val();
    for(var i=0;i<menu_item_data.length;i++){
        if(menu_item_data[i].counter == dynamic_counter){
            availableTags = [];
            for(var j=0;j<menu_item_data[i].item.length;j++){
                availableTags.push(menu_item_data[i].item[j].name);
            }
            $( "#dynamic-name" ).autocomplete({
              source: availableTags
            });
        }
    }
});

$('body').on('click', '#ui-id-5 li', function() {
    dynamic_counter = $("#dynamic-counter").val();
    dynamic_name = $("#dynamic-name").val();
    for(var i=0;i<menu_item_data.length;i++){
        if(menu_item_data[i].counter == dynamic_counter){
            availableTags = [];
            for(var j=0;j<menu_item_data[i].item.length;j++){
                if(menu_item_data[i].item[j].name == dynamic_name)
                    $("#dynamic-price").val(menu_item_data[i].item[j].price);
            }
        }
    }
});




document.addEventListener("backbutton",function(){ 
    navigator.notification.confirm(
           'Do you want to quit', 
           onConfirmQuit, 
           'QUIT TITLE', 
           'OK,Cancel'  
    );
}, true);

function onConfirmQuit(button){
   if(button == "1"){
     navigator.app.exitApp(); 
   }
}