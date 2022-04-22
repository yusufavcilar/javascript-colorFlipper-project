const colors = ["#00ffff","#7fff00","#ff7f50","#dc143c",
"#00008b","#9400d3","#ff1493","#adff2f","#f0e68c",
"#191970","#ff4500","#da70d6","#ff6347","#ffff00"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener ("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors [randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
} 