var drumLength = document.querySelectorAll(".drumkit").length;
    for(var i = 0 ; i < drumLength; i++){
        document.querySelectorAll(".drumkit")[i].addEventListener("click",function(){
           var buttonInnerHTML = this.innerHTML;
           makeSound(buttonInnerHTML)
           addAnimation(buttonInnerHTML)
        });
    };
  
document.addEventListener("keydown" , function(event){
    makeSound(event.key)
    addAnimation(event.key)
})


function makeSound(key){

switch (key) {

  case "q":
var drum1 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/tom-1.mp3');
 drum1.play();
 break;
        
case "w":
var drum2 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/tom-2.mp3');
drum2.play();
 break;

 case "e":
 var drum3 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/tom-3.mp3');
 drum3.play();
 break;

 case "r":
var drum4 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/tom-4.mp3');
 drum4.play();
  break;

  case "u":
 var drum5 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/snare.mp3');
 drum5.play();
break;

  case "i":
 var drum6 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/kick-bass.mp3');
 drum6.play();
  break;

   case "o":
  var drum7 = new Audio('https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/drum-sounds/crash.mp3');
  drum7.play();
     break; 
        default:
         console.log(buttonInnerHTML)
      }
    };


    function addAnimation(button){
       var animateButton = document.querySelector("." + button);
       animateButton.classList.add("pressed"); 


       setTimeout(function() {
        animateButton.classList.remove("pressed");
       }, 200);
    }


// ......GUITAR PAGE.....
   

var guitarLength = document.querySelectorAll(".guitarkit").length;
for(var g = 0; g < guitarLength; g++){
   document.querySelectorAll(".guitarkit")[g].addEventListener("click" ,function(){
      var guitarHTML = this.innerHTML;
      guitarSound(guitarHTML)
      guitarAnimation(guitarHTML)
   })
}
   document.addEventListener("keydown",function(event){
      guitarSound(event.key)
      guitarAnimation(event.key)
   })


   function guitarSound(key){

      switch (key) {
          case "a":
          var guitar1 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar1.mp3")
          guitar1.play();
          break;

          case "s":
            var guitar2 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar2.mp3")
            guitar2.play();
            break;

          case "d":
             var guitar3 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar3.mp3")
             guitar3.play();
              break;

           case "f":
              var guitar4 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar4.mp3")
              guitar4.play();
              break;  

           case "k":
              var guitar5 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar5.mp3")
              guitar5.play();
              break;
                     
            case "l":
               var guitar6 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/guitar-sounds/guitar6.mp3")
               guitar6.play();
               break;

         default:
         console.log(guitarHTML);
       }};
       
  function guitarAnimation(gButton){
   var guitarButton = document.querySelector("." + gButton);
   guitarButton.classList.add("pressed")

   setTimeout( function(){guitarButton.classList.remove("pressed")}, 200);
  }

   


//   .. .. .. PIANO PAGE .. .. ..



var pianoLength = document.querySelectorAll(".pianokit").length;
for(var p = 0;p<pianoLength;p++){
   document.querySelectorAll(".pianokit")[p].addEventListener("click", function(){
      var pianoHTML = this.innerHTML;
      pianoSound(pianoHTML);
      pianoAnimation(pianoHTML);
   })
   
}


   document.addEventListener("keydown" ,function (event){
      pianoSound(event.key);
      pianoAnimation(event.key);
   })


function pianoSound(key){
   
switch (key) {
   case "z":
   var piano1 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano1.mp3")
   piano1.play()
   break;  case "x":
   var piano2 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano2.mp3")
   piano2.play()
   break;  case "c":
   var piano3 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano3.mp3")
   piano3.play()
   break;  case "v":
   var piano4 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano4.mp3")
   piano4.play()
   break;  case "n":
   var piano5 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano5.mp3")
   piano5.play()
   break;  case "m":
   var piano6 = new Audio("https://raw.githubusercontent.com/Menka-ctrlC/Music-Band/main/sounds/piano-sounds/piano6.mp3")
   piano6.play()
 break;
  
   default:
     console.log(pianoHTML);
 }
}
function pianoAnimation(pButton){
 var pianoButton =  document.querySelector("." + pButton);
 pianoButton.classList.add("pressed")

 setTimeout(function(){
   pianoButton.classList.remove("pressed")
 } ,200)
}
 