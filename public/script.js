
$(function () {
  var socket = io();
  var songCount = 0;
  var sound = new Howl({
    src: ['frogsong.mp3'],
    loop: true,
  });

  var timer = 0;
  var songID = "";

  socket.on('connected', (count)=>{
    $('#count').text(count); 
    songID = "id"+count;
   	console.log(songID);
   	songID = sound.play();

    console.log(count);
    $('body').removeClass().addClass("bg"+count);
  });

  socket.on('timer', function (data) {  
        $('#timer').text(data.timer);
  });

  socket.on('disconnected', (count)=>{
  	  console.log('disconnected');
  	  sound.stop(songID);
  	  $('#count').text(count); 
  	  console.log(count);
  	  $('body').removeClass().addClass("bg"+count);
  });
  
});