var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0 ; i<noOfDrumButtons ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button = this.innerHTML;
    makeSound(button);
    makeButtonAnimation(button);
    });
}


document.addEventListener("keypress",function(event){
      makeSound(event.key);
      makeButtonAnimation(event.key);
});   

function makeSound(key){
      switch (key) {
            case "d":
                  var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                  break;
            case "j":
                  var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                  break;
            case "k":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break; 
            case "l":
                  var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;     
            case "w":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break; 
            case "a":
                        var kick = new Audio("sounds/kick-bass.mp3");
                        kick.play();
                        break; 
            case "s":
                            var snare = new Audio("sounds/snare.mp3");
                            snare.play();
                            break;                        
    
                  default: console.log(button);
                break;
}}

function makeButtonAnimation (key) {

      var buttonAnimation = document.querySelector("."+key);

      buttonAnimation.classList.add("pressed");

      setTimeout (function(){
            buttonAnimation.classList.remove("pressed");
       },100 );

}










