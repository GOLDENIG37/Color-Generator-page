const numbersAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9,"A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let box1 = document.getElementById("box1")
let hex1 = document.getElementById("hex1")
let box2 = document.getElementById("box2")
let hex2 = document.getElementById("hex2")
let box3 = document.getElementById("box3")
let hex3 = document.getElementById("hex3")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() *16)
    return randomNumber
}
button.addEventListener("click", function(event){
    let hexCodeBox1 = "#"
    for( myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
    let randomHex= numbersAndLetters[generateRandomNumber()]
    hexCodeBox1 += randomHex
    console.log(event)
    }

    box1.style.backgroundColor = hexCodeBox1
    hex1.innerText = hexCodeBox1

    let hexCodeBox2 = "#"
    for( mySecondLoop = 0; mySecondLoop<6; mySecondLoop++){
    let brandomHex= numbersAndLetters[generateRandomNumber()]
    hexCodeBox2 += brandomHex
    }

    box2.style.backgroundColor = hexCodeBox2
    hex2.innerText = hexCodeBox2

    let hexCodeBox3 = "#"
    for(myThirdLoop = 0; myThirdLoop<6; myThirdLoop++){
        let crandomHex = numbersAndLetters[generateRandomNumber()]
        hexCodeBox3 += crandomHex
    }
    box3.style.backgroundColor = hexCodeBox3
    hex3.innerText = hexCodeBox3
})