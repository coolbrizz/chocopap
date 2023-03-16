const menuBurger = document.getElementById('btn');
const sidebar = document.getElementById('side-bar');
const content = document.getElementById('conteneur');
const result = document.getElementById('result')
const body =document.getElementById('logo')
const afficheProduit = document.getElementById('afficheProduit')
var clickChocolate;
let click;
let dataChocolate = [];

async function fetchChocolate(){
  await fetch ("products.json")
    .then((res)=>res.json())
    .then((data)=>(dataChocolate = data));
    chocolateDisplay();
    }


function chocolateDisplay(){
result.innerHTML=
 dataChocolate.map(
  (chocolate)=>
 `<li class="card">
 <a href="/ficheproduit.html">
 <img src=/${chocolate.image} alt="photo${chocolate.image}" id="image"></a>
<h2> ${chocolate.title}</h2>
<p>${chocolate.price} €</p>
<p>Note : ${chocolate.note}</p>
<button>Ajouter au panier</button>
</li>`).join("");
}  

fetchChocolate();


result.addEventListener('click',(e) =>{
 clickChocolate = e.target;
});

window.addEventListener('load', () => {console.log("hello");
// afficheProduit.innerHTML = `${clickChocolate}`;
});


menuBurger.addEventListener('click', () => {
  menuBurger.classList.remove("toggle-btn");
  sidebar.style.display= "block";
  content.style.visibility="visible";
  click = false;
})

content.addEventListener('click', () => {
  sidebar.style.display= "none";
  menuBurger.classList.toggle("toggle-btn");
  content.style.visibility="hidden";
})
