let bod = document.body
let c2 = bod.querySelector(".cube")
let c3 = bod.querySelector(".cb")


  c2.classList.toggle("rotate")
  c3.classList.toggle("visible")
  
bod.onclick = () => {/*
  if (c3.className.charAt(3) == "r") {
    console.log(2);
    c3.style.transform = "translateX(-35px)"
    setTimeout(() => {
      console.log(3);
      c3.style.transform = "translateX(35px)"
    }, 1000)
  } else {
    
  }*/
  c2.classList.toggle("rotate")
  c2.classList.toggle("visible")
  c3.classList.toggle("rotate")
  c3.classList.toggle("visible")
  console.log(c2.className.charAt(5));
}












