

var paris = document.querySelector(".paris")

var cairo = document.querySelector(".cairo")

var amsterdam = document.querySelector(".amsterdam")

var remove = document.querySelector(".delete")

var hide = document.querySelector(".hidden1")


var hide2 = document.querySelector(".hidden2")


var hide3 = document.querySelector(".hidden3")



paris.addEventListener("click", function () {
    hide.style.display = "block"
    hide.style.color = "red"
    hide2.style.display = "none"
    hide3.style.display = "none"
})


cairo.addEventListener("click", function () {
    hide2.style.display = "block"
    hide.style.display = "none"
    hide3.style.display = "none"
})

amsterdam.addEventListener("click", function () {
    hide.style.display = "none"
    hide3.style.color = "magenta"
    hide2.style.display = "none"
    hide3.style.display = "block"

})

remove.addEventListener("click", function () {
    hide.style.display = "none"
    hide2.style.display = "none"
    hide3.style.display = "none"

})

