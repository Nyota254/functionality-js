//Skin Functionality Implementation

var yellowSkin = document.getElementById("yellow-skin")
var greenSkin = document.getElementById("green-skin")
var redSkin = document.getElementById("red-skin")

var skinSelection = document.getElementById("skin")

yellowSkin.addEventListener("click",function(){
    skinSelection.src = "./assets/skin/yellow.png"
})

greenSkin.addEventListener("click",function(){
    skinSelection.src = "./assets/skin/green.png"
})

redSkin.addEventListener("click",function(){
    skinSelection.src = "./assets/skin/red.png"
})




// Navigation Functionality Implementation Vanilla

var showEyes = document.querySelectorAll(".show-eyes-card")
var skinCard = document.getElementById("select-skin-card")
var eyesCard = document.getElementById("select-eyes-card")

var showEyesArray = Array.prototype.slice.call(showEyes)

showEyesArray.forEach(element => {
    element.addEventListener("click",function(){
        
            skinCard.style.display = "none"
            mouthCard.style.display = "none"
            eyesCard.style.display = "block"
    })
});

// showEyes.addEventListener("click",function(){
//     skinCard.style.display = "none"
//     eyesCard.style.display = "block"
// })

var showSkin = document.getElementById("show-skin-card")
var showMouth = document.getElementById("show-mouth-card")
var mouthCard = document.getElementById("select-mouth-card")

showSkin.addEventListener("click",function(){
    eyesCard.style.display = "none"
    skinCard.style.display = "block"
})

showMouth.addEventListener("click",function(){
    eyesCard.style.display = "none";
    mouthCard.style.display = "block";
})

// var showEyesP = document.getElementsByClassName("show-eyes-card")


//Eyes Functionality implementation

var eyeNormal = document.getElementById("eye-normal")
var eyeClosed = document.getElementById("eye-closed")
var eyeLong = document.getElementById("eye-long")
var eyeLaughing = document.getElementById("eye-laughing")
var eyeRolling = document.getElementById("eye-rolling")
var eyeWinking = document.getElementById("eye-winking")

var eyeSelection = document.getElementById("eyes")

eyeNormal.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/normal.png"
})

eyeClosed.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/closed.png"
})

eyeLong.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/long.png"
})

eyeLaughing.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/laughing.png"
})

eyeRolling.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/rolling.png"
})

eyeWinking.addEventListener("click",function(){
    eyeSelection.src = "./assets/eyes/winking.png"
})

//Mouth Functionality implementation

var mouthOpen = document.getElementById("mouth-open")
var mouthSad = document.getElementById("mouth-sad")
var mouthSmiling = document.getElementById("mouth-smiling")
var mouthStraight = document.getElementById("mouth-straight")
var mouthTeeth = document.getElementById("mouth-teeth")

var mouthSelection = document.getElementById("mouth")

mouthOpen.addEventListener("click",function(){
    mouthSelection.src = "./assets/mouth/open.png"
})

mouthSad.addEventListener("click",function(){
    mouthSelection.src = "./assets/mouth/sad.png"
})

mouthSmiling.addEventListener("click",function(){
    mouthSelection.src = "./assets/mouth/smiling.png"
})

mouthStraight.addEventListener("click",function(){
    mouthSelection.src = "./assets/mouth/straight.png"
})

mouthTeeth.addEventListener("click",function(){
    mouthSelection.src = "./assets/mouth/teeth.png"
})
