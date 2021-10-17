let bod = document.body
let up = document.querySelector(".up")
let left = document.querySelector(".left")
let front = document.querySelector(".front")
let rigth = document.querySelector(".rigth")
let down = document.querySelector(".down")
let U = document.querySelector(".U")
let U_ = document.querySelector(".U-")
let D = document.querySelector(".D")
let D_ = document.querySelector(".D-")
let L = document.querySelector(".L")
let L_ = document.querySelector(".L-")
let R = document.querySelector(".R")
let R_ = document.querySelector(".R-")
let buttonU = document.querySelector(".buttonU")
let buttonU_ = document.querySelector(".buttonU-")
let buttonD = document.querySelector(".buttonD")
let buttonD_ = document.querySelector(".buttonD-")
let buttonL = document.querySelector(".buttonL")
let buttonL_ = document.querySelector(".buttonL-")
let buttonR = document.querySelector(".buttonR")
let buttonR_ = document.querySelector(".buttonR-")

let Up = {
  square1: up.querySelector(".square1"),
  square2: up.querySelector(".square2"),
  square3: up.querySelector(".square3"),
  square4: up.querySelector(".square4"),
  square5: up.querySelector(".square5"),
  square6: up.querySelector(".square6"),
  square7: up.querySelector(".square7"),
  square8: up.querySelector(".square8"),
  square9: up.querySelector(".square9"),
}
let Left = {
  square1: left.querySelector(".square1"),
  square2: left.querySelector(".square2"),
  square3: left.querySelector(".square3"),
  square4: left.querySelector(".square4"),
  square5: left.querySelector(".square5"),
  square6: left.querySelector(".square6"),
  square7: left.querySelector(".square7"),
  square8: left.querySelector(".square8"),
  square9: left.querySelector(".square9"),
}
let Front = {
  square1: front.querySelector(".square1"),
  square2: front.querySelector(".square2"),
  square3: front.querySelector(".square3"),
  square4: front.querySelector(".square4"),
  square5: front.querySelector(".square5"),
  square6: front.querySelector(".square6"),
  square7: front.querySelector(".square7"),
  square8: front.querySelector(".square8"),
  square9: front.querySelector(".square9"),
}
let Rigth = {
  square1: rigth.querySelector(".square1"),
  square2: rigth.querySelector(".square2"),
  square3: rigth.querySelector(".square3"),
  square4: rigth.querySelector(".square4"),
  square5: rigth.querySelector(".square5"),
  square6: rigth.querySelector(".square6"),
  square7: rigth.querySelector(".square7"),
  square8: rigth.querySelector(".square8"),
  square9: rigth.querySelector(".square9"),
}
let Down = {
  square1: down.querySelector(".square1"),
  square2: down.querySelector(".square2"),
  square3: down.querySelector(".square3"),
  square4: down.querySelector(".square4"),
  square5: down.querySelector(".square5"),
  square6: down.querySelector(".square6"),
  square7: down.querySelector(".square7"),
  square8: down.querySelector(".square8"),
  square9: down.querySelector(".square9"),
}

function ElementsObjects(object, clToggle = "", squareMin = 1, squareMax = 9) {
  if (squareMin == 1)
    object.square1.classList.toggle(clToggle)
  if (squareMin <= 2 && squareMax >= 2)
    object.square2.classList.toggle(clToggle)
  if (squareMin <= 3 && squareMax >= 3)
    object.square3.classList.toggle(clToggle)
  if (squareMin <= 4 && squareMax >= 4)
    object.square4.classList.toggle(clToggle)
  if (squareMin <= 5 && squareMax >= 5)
    object.square5.classList.toggle(clToggle)
  if (squareMin <= 6 && squareMax >= 6)
    object.square6.classList.toggle(clToggle)
  if (squareMin <= 7 && squareMax >= 7)
    object.square7.classList.toggle(clToggle)
  if (squareMin <= 8 && squareMax >= 8)
    object.square8.classList.toggle(clToggle)
  if (squareMin <= 9 && squareMax >= 9)
    object.square9.classList.toggle(clToggle)
  return ""
}
ElementsObjects(Up, "hiddenV")
ElementsObjects(Left, "hiddenH")
ElementsObjects(Rigth, "hiddenH")
ElementsObjects(Down, "hiddenV")

buttonU.onclick = () => {
  if (!buttonU_.disabled) {
    ElementsObjects(Rigth, "hiddenH", 1, 3)
    ElementsObjects(Front, "hiddenH", 1, 3)
    buttonU.disabled = true
  }
  else {
    ElementsObjects(Left, "hiddenH", 1, 3)
    ElementsObjects(Front, "hiddenH", 1, 3)
    buttonU_.disabled = false
  }
}
buttonU_.onclick = () => {
  if (!buttonU.disabled) {
    ElementsObjects(Left, "hiddenH", 1, 3)
    ElementsObjects(Front, "hiddenH", 1, 3)
    buttonU_.disabled = true
  }
  else {
    ElementsObjects(Rigth, "hiddenH", 1, 3)
    ElementsObjects(Front, "hiddenH", 1, 3)
    buttonU.disabled = false
  }
}
buttonD.onclick = () => {
  if (!buttonD_.disabled) {
    ElementsObjects(Rigth, "hiddenH", 7)
    ElementsObjects(Front, "hiddenH", 7)
    buttonD.disabled = true
  }
  else {
    ElementsObjects(Left, "hiddenH", 7)
    ElementsObjects(Front, "hiddenH", 7)
    buttonD_.disabled = false
  }
}
buttonD_.onclick = () => {
  if (!buttonD.disabled) {
    ElementsObjects(Left, "hiddenH", 7)
    ElementsObjects(Front, "hiddenH", 7)
    buttonD_.disabled = true
  }
  else {
    ElementsObjects(Rigth, "hiddenH", 7)
    ElementsObjects(Front, "hiddenH", 7)
    buttonD.disabled = false
  }
}
buttonL.onclick = () => {
  if (!buttonL_.disabled) {
    ElementsObjects(Down, "hiddenV", 1, 1)
    ElementsObjects(Down, "hiddenV", 4, 4)
    ElementsObjects(Down, "hiddenV", 7, 7)
    ElementsObjects(Front, "hiddenV", 1, 1)
    ElementsObjects(Front, "hiddenV", 4, 4)
    ElementsObjects(Front, "hiddenV", 7, 7)
    buttonL.disabled = true
  }
  else {
    ElementsObjects(Up, "hiddenV", 1, 1)
    ElementsObjects(Up, "hiddenV", 4, 4)
    ElementsObjects(Up, "hiddenV", 7, 7)
    ElementsObjects(Front, "hiddenV", 1, 1)
    ElementsObjects(Front, "hiddenV", 4, 4)
    ElementsObjects(Front, "hiddenV", 7, 7)
    buttonL_.disabled = false
  }
}
buttonL_.onclick = () => {
  if (!buttonL.disabled) {
    ElementsObjects(Up, "hiddenV", 1, 1)
    ElementsObjects(Up, "hiddenV", 4, 4)
    ElementsObjects(Up, "hiddenV", 7, 7)
    ElementsObjects(Front, "hiddenV", 1, 1)
    ElementsObjects(Front, "hiddenV", 4, 4)
    ElementsObjects(Front, "hiddenV", 7, 7)
    buttonL_.disabled = true
  }
  else {
    ElementsObjects(Down, "hiddenV", 1, 1)
    ElementsObjects(Down, "hiddenV", 4, 4)
    ElementsObjects(Down, "hiddenV", 7, 7)
    ElementsObjects(Front, "hiddenV", 1, 1)
    ElementsObjects(Front, "hiddenV", 4, 4)
    ElementsObjects(Front, "hiddenV", 7, 7)
    buttonL.disabled = false
  }
}
buttonR.onclick = () => {
  if (!buttonR_.disabled) {
    ElementsObjects(Up, "hiddenV", 3, 3)
    ElementsObjects(Up, "hiddenV", 6, 6)
    ElementsObjects(Up, "hiddenV", 9, 9)
    ElementsObjects(Front, "hiddenV", 3, 3)
    ElementsObjects(Front, "hiddenV", 6, 6)
    ElementsObjects(Front, "hiddenV", 9, 9)
    buttonR.disabled = true
  }
  else {
    ElementsObjects(Down, "hiddenV", 3, 3)
    ElementsObjects(Down, "hiddenV", 6, 6)
    ElementsObjects(Down, "hiddenV", 9, 9)
    ElementsObjects(Front, "hiddenV", 3, 3)
    ElementsObjects(Front, "hiddenV", 6, 6)
    ElementsObjects(Front, "hiddenV", 9)
    buttonR_.disabled = false
  }
}
buttonR_.onclick = () => {
  if (!buttonR.disabled) {
    ElementsObjects(Down, "hiddenV", 3, 3)
    ElementsObjects(Down, "hiddenV", 6, 6)
    ElementsObjects(Down, "hiddenV", 9, 9)
    ElementsObjects(Front, "hiddenV", 3, 3)
    ElementsObjects(Front, "hiddenV", 6, 6)
    ElementsObjects(Front, "hiddenV", 9)
    buttonR_.disabled = true
  }
  else {
    ElementsObjects(Up, "hiddenV", 3, 3)
    ElementsObjects(Up, "hiddenV", 6, 6)
    ElementsObjects(Up, "hiddenV", 9, 9)
    ElementsObjects(Front, "hiddenV", 3, 3)
    ElementsObjects(Front, "hiddenV", 6, 6)
    ElementsObjects(Front, "hiddenV", 9, 9)
    buttonR.disabled = false
  }
}