const parinte = document.getElementById("parinte")
const button = document.getElementById("button-1")
const text = document.getElementById("p")

button.addEventListener("click",()=>{
  const input = document.getElementById("color").value
  console.log(input)
  text.textContent = input.toUpperCase()
  parinte.style.backgroundColor = input
})
