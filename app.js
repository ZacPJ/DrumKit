let clap = new Audio("./Sounds/clap.wav");
let kick = new Audio("./Sounds/kick.wav");
let tink = new Audio("./Sounds/tink.wav");
let tom = new Audio("./Sounds/tom.wav");
let boom = new Audio("./Sounds/boom.wav");
let hihat = new Audio("./Sounds/hihat.wav");
let openhat = new Audio("./Sounds/openhat.wav");
let snare = new Audio("./Sounds/snare.wav");
let ride = new Audio("./Sounds/ride.wav");

window.addEventListener('click',(event)=>{
    if(event.target==Boom){
        boom.play();
    } else if(event.target==Clap){
        clap.play();
    } else if(event.target==Hihat){
        hihat.play();
    } else if(event.target==Kick){
        kick.play();
    } else if(event.target==Openhat){
        openhat.play();
    } else if(event.target==Ride){
        ride.play();
    } else if(event.target=Snare){
        snare.play();
    } else if(event.target==Tink){
        tink.play();
    } else if(event.target==Tom){
        tom.play();
    }
})
window.addEventListener('keydown',(event)=>{
    if (event.key == "Q" || event.key == "q"){
        document.getElementById("Boom").click()
    }else if(event.key == "W"||event.key == "w"){
        document.getElementById("Clap").click()
    }else if(event.key == "E"||event.key == "e"){
        document.getElementById("Hihat").click()
    }else if(event.key == "R"||event.key == "r"){
        document.getElementById("Kick").click()
    }else if(event.key == "T"||event.key == "t"){
        document.getElementById("Openhat").click()
    }else if(event.key == "A"||event.key == "a"){
        document.getElementById("Ride").click()
    }else if(event.key == "S"||event.key == "s"){
        document.getElementById("Snare").click()
    }else if(event.key == "D"||event.key == "d"){
        document.getElementById("Tink").click()
    }else if(event.key == "F"||event.key == "f"){
        document.getElementById("Tom").click()
    }

})
