let cube = document.querySelector("#cube")
let buttonU = document.querySelector(".buttonU")
let buttonU_ = document.querySelector(".buttonU-")
let buttonD = document.querySelector(".buttonD")
let buttonD_ = document.querySelector(".buttonD-")
let buttonL = document.querySelector(".buttonL")
let buttonL_ = document.querySelector(".buttonL-")
let buttonR = document.querySelector(".buttonR")
let buttonR_ = document.querySelector(".buttonR-")
let buttonF = document.querySelector(".buttonF")
let buttonF_ = document.querySelector(".buttonF-")
let buttonB = document.querySelector(".buttonB")
let buttonB_ = document.querySelector(".buttonB-")
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
  piece9,
  piece8,
  piece7,
  piece6,
  piece5,
  piece4,
  piece3,
  piece2,
  piece1,
]
let Left = [
  piece9,
  piece6,
  piece3,
  piece18,
  piece15,
  piece12,
  piece27,
  piece24,
  piece21,
]
let Front = [
  piece3,
  piece2,
  piece1,
  piece12,
  piece11,
  piece10,
  piece21,
  piece20,
  piece19,
]
let Right = [
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
  piece21,
  piece20,
  piece19,
  piece24,
  piece23,
  piece22,
  piece27,
  piece26,
  piece25,
]

function rotatePieces(face, x = 0, y = 0, z = 0) {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true
  })
  xx=x
  yy=y
  zz=z
  console.log(xx+"/"+yy+"/"+zz);
  var backup = []
  var i = 0
  face.forEach(piece => {
    var oiu = new DOMMatrix(window.getComputedStyle(piece).getPropertyValue('transform'))
    if (Math.round((Math.acos(oiu.d) * (180 / Math.PI)) == 90)) {
      if (oiu.m23 == 1 && oiu.m32 == -1) {
        cc = -y
        yy=z
        zz=cc
        //bc = oiu.rotate(x, z, -y).toJSON()
        console.log(xx+"/"+yy+"/"+zz+"a");
        
      }
      else if (oiu.m23 == -1 && oiu.m32 == 1) {
        cc=y
        yy=-z
        zz=cc
        console.log(xx+"/"+yy+"/"+zz);
      }
    }
    else if (Math.round((Math.acos(oiu.d) * (180 / Math.PI)) == 180)) {
      
      let xx=x
      let yy=y
      let zz=z
      console.log(xx+"/"+yy+"/"+zz);
    }
    else {
      console.log();
      bc = oiu.rotate(xx, yy, zz).toJSON()
    }

    piece.style.transform = "matrix3d(" + bc.m11 + "," + bc.m12 + "," + bc.m13 + "," + bc.m14 + "," + bc.m21 + "," + bc.m22 + "," + bc.m23 + "," + bc.m24 + "," + bc.m31 + "," + bc.m32 + "," + bc.m33 + "," + bc.m34 + "," + bc.m41 + "," + bc.m42 + "," + bc.m43 + "," + bc.m44 + ")"
    backup[i] = piece
    if (i == 0) {
            //console.log(bc);
            //console.log(bc.d+"/"+Math.round(Math.acos(bc.d) * (180/Math.PI)))
    }
    i++

  })
  if ((face == Up && y == -90) || (face == Left && x == -90) || (face == Front && z == 90) || (face == Right && x == 90) || (face == Back && z == -90) || (face == Down && y == 90)) {
    face[0] = backup[6]
    face[1] = backup[3]
    face[2] = backup[0]
    face[3] = backup[7]
    face[4] = backup[4]
    face[5] = backup[1]
    face[6] = backup[8]
    face[7] = backup[5]
    face[8] = backup[2]
  }
  else if ((face == Up && y == 90) || (face == Left && x == 90) || (face == Front && z == -90) || (face == Right && x == -90) || (face == Back && z == 90) || (face == Down && y == -90)) {
    face[0] = backup[2]
    face[1] = backup[5]
    face[2] = backup[8]
    face[3] = backup[1]
    face[4] = backup[4]
    face[5] = backup[7]
    face[6] = backup[0]
    face[7] = backup[3]
    face[8] = backup[6]
  }
  switch (face) {
    case Up:
      Left[0] = face[0]
      Left[1] = face[3]
      Left[2] = face[6]
      Front[0] = face[6]
      Front[1] = face[7]
      Front[2] = face[8]
      Right[0] = face[8]
      Right[1] = face[5]
      Right[2] = face[2]
      Back[0] = face[2]
      Back[1] = face[1]
      Back[2] = face[0]
      break;
    case Left:
      Up[0] = face[0]
      Up[3] = face[1]
      Up[6] = face[2]
      Front[0] = face[2]
      Front[3] = face[5]
      Front[6] = face[8]
      Back[2] = face[0]
      Back[5] = face[3]
      Back[8] = face[6]
      Down[0] = face[6]
      Down[3] = face[7]
      Down[6] = face[8]
      break;
    case Front:
      Up[6] = face[0]
      Up[7] = face[1]
      Up[8] = face[2]
      Left[2] = face[0]
      Left[5] = face[3]
      Left[8] = face[6]
      Right[0] = face[2]
      Right[3] = face[5]
      Right[6] = face[8]
      Down[0] = face[6]
      Down[1] = face[7]
      Down[2] = face[8]
      break;
    case Right:
      Up[2] = face[0]
      Up[5] = face[1]
      Up[8] = face[2]
      Front[2] = face[0]
      Front[5] = face[3]
      Front[8] = face[6]
      Back[0] = face[2]
      Back[3] = face[5]
      Back[6] = face[8]
      Down[2] = face[6]
      Down[5] = face[7]
      Down[8] = face[8]
      break;
    case Back:
      Up[0] = face[2]
      Up[1] = face[1]
      Up[2] = face[0]
      Left[0] = face[2]
      Left[3] = face[5]
      Left[6] = face[8]
      Right[2] = face[0]
      Right[5] = face[3]
      Right[8] = face[6]
      Down[6] = face[8]
      Down[7] = face[7]
      Down[8] = face[6]
      break;
    case Down:
      Left[6] = face[0]
      Left[7] = face[3]
      Left[8] = face[6]
      Front[6] = face[0]
      Front[7] = face[1]
      Front[8] = face[2]
      Right[6] = face[2]
      Right[7] = face[5]
      Right[8] = face[8]
      Back[6] = face[6]
      Back[7] = face[7]
      Back[8] = face[8]
      break;
  }
  setTimeout(() => {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = false
  })
  },2500)
}
buttonU.onclick = () => {
  rotatePieces(Up, 0, -90)
}
buttonU_.onclick = () => {
  rotatePieces(Up, 0, 90)
}
buttonD.onclick = () => {
  rotatePieces(Down, 0, 90)
}
buttonD_.onclick = () => {
  rotatePieces(Down, 0, -90)
}
buttonL.onclick = () => {
  rotatePieces(Left, -90)
}
buttonL_.onclick = () => {
  rotatePieces(Left, 90)
}
buttonR.onclick = () => {
  rotatePieces(Right, 90)
}
buttonR_.onclick = () => {
  rotatePieces(Right, -90)
}
buttonF.onclick = () => {
  rotatePieces(Front, 0, 0, 90)
}
buttonF_.onclick = () => {
  rotatePieces(Front, 0, 0, -90)
}
buttonB.onclick = () => {
  rotatePieces(Back, 0, 0, -90)
}
buttonB_.onclick = () => {
  rotatePieces(Back, 0, 0, 90)
}

/*
Math.acos(matrix.a) * (180/Math.PI);
var rotationY = Math.asin(matrix.b) * (180/Math

window.getComputedStyle(piece).getPropertyValue('transform')
*/