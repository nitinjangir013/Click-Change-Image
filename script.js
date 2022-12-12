$(".td1").click(function(){ 
  bottomImg();
  $('.img').attr('src','https://upload.wikimedia.org/wikipedia/commons/2/2e/Akshay_Kumar.jpg');
  $('.td1').css("background-color", "rgba(27,41,91,1)");
  $('.td2').css("background-color", "transparent");
  $('.td3').css("background-color", "transparent");
  $('.td4').css("background-color", "transparent");
  upImg();
});

$(".td2").click(function(){
  bottomImg();
  $('.img').attr('src','https://theshillongtimes.com/wp-content/uploads/2019/04/Amitabh-Bachhan.jpg');
  $('.td1').css("background-color", "transparent");
  $('.td2').css("background-color", "rgba(27,41,91,1)");
  $('.td3').css("background-color", "transparent");
  $('.td4').css("background-color", "transparent");
  upImg();
});

$(".td3").click(function(){
  bottomImg();
  $('.img').attr('src','https://www.pinkvilla.com/imageresize/sushantsingh_rajput_was_designing_a_game_and_printer_of_his_own_reveals_a_producer_friend.jpg?width=752&format=webp&t=pvorg');
  $('.td1').css("background-color", "transparent");
  $('.td2').css("background-color", "transparent");
  $('.td3').css("background-color", "rgba(27,41,91,1)");
  $('.td4').css("background-color", "transparent");
  upImg();
});

$(".td4").click(function(){
  bottomImg();
  $('.img').attr('src','https://www.pinkvilla.com/imageresize/ranbir-kapoor-on-shamsera-challenging-scene-and-personal-life.jpg?width=752&format=webp&t=pvorg');
  $('.td1').css("background-color", "transparent");
  $('.td2').css("background-color", "transparent");
  $('.td3').css("background-color", "transparent");
  $('.td4').css("background-color", "rgba(27,41,91,1)");
  upImg();
});

function bottomImg()
{
  $(".img").animate({'margin-top':'100px',opacity:'0.5'});
}

function upImg()
{
  $(".img").animate({'margin-top':'50px',opacity:'1'});
}