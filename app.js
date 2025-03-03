document.addEventListener("DOMContentLoaded", function() {
    let btnjs = document.getElementById("btnPlay")
    let tvorogjs = document.getElementById("btnAfter")

    btnjs.addEventListener("click", function (){
        tvorogjs.volume = 1.0
        tvorogjs.play()
    })
})