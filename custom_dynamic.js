
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



var monthNames = ["Jan", "Feb", "March", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var mnth_name  = monthNames[currentdate.getMonth()];

var current_day = currentdate.getDate();

console.log(mnth_name +"--" + current_day)

$(".current_date").html(current_day+" "+mnth_name);

$(".current_time").html(current_time);

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
        $("body").addClass("image-zeta");
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


$("#init-submit").click(function(){
    dynamic_counter = $("#counter_name").val();
    dynamic_name = $("#item_name").val();
    dynamic_quantity = $("#count_name").val();
    dynamic_price = $("#price_name").val();
    if(isNaN(parseInt(dynamic_quantity))){
        dynamic_quantity = 1;
    }
    dynamic_price = parseInt(dynamic_price) * parseInt(dynamic_quantity);

    $("#init-form").addClass("hide");
    $(".z_form").addClass("hide");
    $($(".z_form")[1]).removeClass("hide");
    $(".z_total_price").html("&#8377; " + dynamic_price);

    $(".z_counter_name").html(dynamic_counter);
    $(".z_item_name").html(dynamic_name);
    $(".z_count_no").html(dynamic_quantity);

    $(".z_token_no").html(Math.floor(Math.random()*9000) + 1000);
    $(".z_pin_number").html("PIN: 1116688" + (Math.floor(Math.random()*9000) + 1000));
});




$("#close_order_frm").click(function(){
    $(".z_form").addClass("hide");
    $("#init-form").removeClass("hide");
});

// $("#close_inter_frm").click(function(){
//     $("#init-form").addClass("hide");
//     $(".z_form").addClass("hide");
//     $($(".z_form")[0]).removeClass("hide");
// });



// var availableTags = [];

// for(var i=0;i<menu_item_data.length;i++)
//     availableTags.push(menu_item_data[i].counter);


//     $( "#dynamic-counter" ).autocomplete({
//       source: availableTags
//     });


var availableTags = [];

for(var i=1;i<10;i++){
    availableTags.push(i);
}


$( "#counter_name" ).autocomplete({
  source: zeta_counter_name
});

$( "#item_name" ).autocomplete({
  source: zeta_food_name
});

$( "#count_name" ).autocomplete({
  source: zeta_counter_name
});



$('body').on('click', '#ui-id-2 li', function() {
    var z__dynamic_counter = $("#item_name").val();
    if(z__dynamic_counter.indexOf("(") > -1){
       $("#price_name").val( z__dynamic_counter.substring(z__dynamic_counter .lastIndexOf("(") + 1,z__dynamic_counter .lastIndexOf(")")));
       $("#item_name").val(z__dynamic_counter .substring(0,z__dynamic_counter .lastIndexOf("(") ));
    }
});

// $('body').on('click', '#ui-id-1 li', function() {
//     dynamic_counter = $("#dynamic-counter").val();
//     for(var i=0;i<menu_item_data.length;i++){
//         if(menu_item_data[i].counter == dynamic_counter){
//             availableTags = [];
//             for(var j=0;j<menu_item_data[i].item.length;j++){
//                 availableTags.push(menu_item_data[i].item[j].name);
//             }
//             $( "#dynamic-name" ).autocomplete({
//               source: availableTags
//             });
//         }
//     }
// });

// $('body').on('click', '#ui-id-5 li', function() {
//     dynamic_counter = $("#dynamic-counter").val();
//     dynamic_name = $("#dynamic-name").val();
//     for(var i=0;i<menu_item_data.length;i++){
//         if(menu_item_data[i].counter == dynamic_counter){
//             availableTags = [];
//             for(var j=0;j<menu_item_data[i].item.length;j++){
//                 if(menu_item_data[i].item[j].name == dynamic_name)
//                     $("#dynamic-price").val(menu_item_data[i].item[j].price);
//             }
//         }
//     }
// });


function onConfirmQuit(button){
   if(button == "1"){
     navigator.app.exitApp(); 
   }
}



Draggable.create('.box', {
    type: 'x',
    edgeResistance: 1,
    bounds: '.wrap',
    lockAxis: true,
    throwProps: true,
    snap: {
        x: function(endValue) {
            var num;
                    
            if (endValue > 240) {
                num = 280; // width of box
            } else {
                num = 0;
            }
            
            return num;
        }
    },
    onDrag: function() {
        console.log(this.x);
        if(this.x > 300) {
            if($($(".z_form")[0]).hasClass("hide")){
                $("#init-form").addClass("hide");
                $(".z_form").addClass("hide");
                $($(".z_form")[0]).removeClass("hide");
            }
        }
    }
});


