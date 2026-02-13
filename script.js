const yes = document.getElementById('yes');
const no = document.getElementById('no');
const accept = document.getElementById('acc')
const vall = document.querySelector(".valcard2")
const val1 = document.querySelector(".valcard")

let ye = "Yes🥰"
let count = 0
let pls = "Are you sure🥲"
let ppls = "Pretty please😪"
no.addEventListener("click", function(e) {
    e.preventDefault
    count ++
   if(count == 1){
    document.getElementById('yes').innerHTML = ye.toUpperCase()
    yes.style.width = "200px"
    yes.style.height = "150px"
   }
    else if(count == 2){
    yes.style.width = "230px" 
    yes.style.height = "200px"
    yes.style.padding = "15px"
    no.style.transform = "translateY(-350px)"
    no.style.transform = "translateX(-10px)"
    no.style.width = "fit-content"
    no.innerHTML = pls
    }
    else if (count == 3){
    yes.style.width = "330px" 
    yes.style.height = "300px" 
    no.style.width = "80px"
    yes.style.transfrom = "scale(2)"
    no.style.transform = "scale(0.7)"
    no.innerHTML = ppls
    no.style.width = "fit-content"
    no.style.transform = "translateY(-410px)"
    }
    else if (count == 3){
    yes.style.width = "330px" 
    yes.style.height = "300px" 
    no.style.width = "80px"
    yes.style.transfrom = "scale(1.5)"
    no.style.transform = "scale(0.9)"
    no.style.transform = "scale(0.7)"
    no.innerHTML = ppls
    no.style.width = "fit-content"
    no.style.transform = "translateY(-410px)"
    no.style.transform = "translateX(-300px)"
    }
    else{
        no.style.transform = "scale(0.2)"
        yes.style.width = "100%"
        yes.style.height = "100%"
        yes.style.cursor = "pointer"
    }
  
    
});


yes.addEventListener('click', function(e){
    vall.innerHTML = `
    <div class="valcard2" id="acc">
        <img src="./images.jpg" alt="img" class="teddy2">
        <h2>Yayyyyyy🥳🥰😊</h2>
        <p>Happy Valentine 😘🤭</p>
        <button class="reply" id="reply">Send Reply</button>
    </div>
    `
    // val1.classList.remove("active")
    val1.style.display = "none"

    let reply = document.getElementById('reply')
  const phone = "+2348022887821"; // replace with your number
  const message = "Hey I just clicked YES on your page! ";

  const whatsappLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, "_blank");
  message.style.cursor = "pointer"
})









