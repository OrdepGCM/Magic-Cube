let cube = document.querySelector("#cube")
let buttonU = document.querySelector(".buttonU")
let buttonU_ = document.querySelector(".buttonU-")
let buttonD = document.querySelector(".buttonD")
let buttonD_ = document.querySelector(".buttonD-")
let buttonL = document.querySelector(".buttonL")
let buttonL_ = document.querySelector(".buttonL-")
let buttonR = document.querySelector(".buttonR")
let buttonR_ = document.querySelector(".buttonR-")
let piece1 = cube.querySelector(".piece1")
let piece2 = cube.querySelector(".piece2")
let piece3 = cube.querySelector(".piece3")
let piece4 = cube.querySelector(".piece4")
let piece5 = cube.querySelector(".piece5")
let piece6 = cube.querySelector(".piece6")
let piece7 = cube.querySelector(".piece7")
let piece8 = cube.querySelector(".piece8")
let piece9 = cube.querySelector(".piece9")
let piece10 = cube.querySelector(".piece10")
let piece11 = cube.querySelector(".piece11")
let piece12 = cube.querySelector(".piece12")
let piece13 = cube.querySelector(".piece13")
let piece14 = cube.querySelector(".piece14")
let piece15 = cube.querySelector(".piece15")
let piece16 = cube.querySelector(".piece16")
let piece17 = cube.querySelector(".piece17")
let piece18 = cube.querySelector(".piece18")
let piece19 = cube.querySelector(".piece19")
let piece20 = cube.querySelector(".piece20")
let piece21 = cube.querySelector(".piece21")
let piece22 = cube.querySelector(".piece22")
let piece23 = cube.querySelector(".piece23")
let piece24 = cube.querySelector(".piece24")
let piece25 = cube.querySelector(".piece25")
let piece26 = cube.querySelector(".piece26")
let piece27 = cube.querySelector(".piece27")

let Up = [
  piece1,
  piece2,
  piece3,
  piece4,
  piece5,
  piece6,
  piece7,
  piece8,
  piece9,
]
let Left = [
  piece3,
  piece6,
  piece9,
  piece12,
  piece15,
  piece18,
  piece21,
  piece24,
  piece27,
]
let Front = [
  piece1,
  piece2,
  piece3,
  piece10,
  piece12,
  piece13,
  piece19,
  piece20,
  piece21,
]
let Rigth = [
  piece1,
  piece4,
  piece7,
  piece10,
  piece13,
  piece16,
  piece19,
  piece22,
  piece25,
]
let Back = [
  piece7,
  piece8,
  piece9,
  piece16,
  piece17,
  piece18,
  piece25,
  piece26,
  piece27,
]
let Down = [
  piece19,
  piece20,
  piece21,
  piece22,
  piece23,
  piece24,
  piece25,
  piece26,
  piece27,
]

/*
     if () {
      backup[0] = Up[2]
      backup[1] = Up[5]
      backup[2] = Up[8]
      backup[3] = Up[1]
      backup[4] = Up[4]
      backup[5] = Up[7]
      backup[6] = Up[0]
      backup[7] = Up[3]
      backup[8] = Up[6]
    }/*
    for (var i = 0; i <=8; i++) {
      Up[i] = backup[i]
    }*/

function rotatePieces(face, x = 0, y = 0, z = 0) {
  var backup = []
  var i = 0
  face.forEach(piece => {
    var oiu = new DOMMatrix(window.getComputedStyle(piece).getPropertyValue('transform'))

    let bc = oiu.rotate(x, y, z).toJSON()
    piece.style.transform = "matrix3d(" + bc.m11 + "," + bc.m12 + "," + bc.m13 + "," + bc.m14 + "," + bc.m21 + "," + bc.m22 + "," + bc.m23 + "," + bc.m24 + "," + bc.m31 + "," + bc.m32 + "," + bc.m33 + "," + bc.m34 + "," + bc.m41 + "," + bc.m42 + "," + bc.m43 + "," + bc.m44 + ")"
    backup[i] = piece
    i++
  })
  switch (face) {
    case Up:
      face[0] = backup[2]
      face[1] = backup[5]
      face[2] = backup[8]
      face[3] = backup[1]
      face[4] = backup[4]
      face[5] = backup[7]
      face[6] = backup[0]
      face[7] = backup[3]
      face[8] = backup[6]
      break;
  }
}
buttonU.onclick = () => {
  rotatePieces(Up, 0, -90)
}
buttonU_.onclick = () => {
  rotatePieces(Up, 0, 90)
}
buttonD.onclick = () => {
  rotatePieces(Down, 0, -90)
}
buttonD_.onclick = () => {
  rotatePieces(Down, 0, 90)
}
buttonL.onclick = () => {
  rotatePieces(Left, -90)
}
buttonL_.onclick = () => {
  rotatePieces(Left, 90)
}
buttonR.onclick = () => {
  rotatePieces(Rigth, -90)
}
buttonR_.onclick = () => {
  rotatePieces(Rigth, 90)
}