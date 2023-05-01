const nbArticles = document.querySelector('.nbArticle')
const result = document.getElementById('result')
const articles = document.getElementById('articles')
const body = document.getElementById('logo');
const empty = document.querySelector('.empty')
const closePanier = document.querySelector('.closePanier')
const cardbasket = document.querySelector('.cardbasket')
const panier = document.querySelector('.fa-solid')
const valide = document.querySelector('.valide')
const total = document.querySelector('total')
let dataChocolate = []; 
let nombreArticles="";
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totalPanier = 0;

async function fetchChocolate(){
  await fetch ("products.json")
    .then((res)=>res.json())
    .then((data)=>(dataChocolate = data));
    chocolateDisplay();
    panierDisplay();
    }

//affiche le nombre d'article dans la navigation
function nombreArticle(){
  nombreArticles = cartItems.length;
  nbArticles.innerHTML = nombreArticles;
}

    function panierDisplay(){
      articles.innerHTML = cartItems.map((items) => {
        return `<li class="cardarticles">
        <span class='closePanier'>X</span>
        <img src=/${items.image} alt="photo${items.image}">
        <h3> ${items.title}</h3>
        <p>${items.price} €</p>
        <input type='number' id='number' defaultValue="1" min='1' max='100' autoComplete='off'></input>`
    }).join("");
    const closePanier = document.querySelectorAll('.closePanier');
    closePanier.forEach((button, index) => {
      button.addEventListener("click", () => {
        removeToCart(index);
        // location.reload();
        totalPanier--;})})
  }


    function chocolateDisplay() {

      let noteStars = "";
      result.innerHTML = dataChocolate.map((chocolate) => {
        //Notation en étoiles des chocolats
        if (chocolate.note == "1") {
          noteStars = "⭐";
        } else if (chocolate.note == "2") {
          noteStars = "⭐⭐";
        } else if (chocolate.note == "3") {
          noteStars = "⭐⭐⭐";
        } else if (chocolate.note == "4") {
          noteStars = "⭐⭐⭐⭐";
        } else if (chocolate.note == "5") {
          noteStars = "⭐⭐⭐⭐⭐";
        }

        //affichage du map des chocolats
        return `<li class="card">
          <img src=/${chocolate.image} alt="photo${chocolate.image}">
          <h2> ${chocolate.title}</h2>
          <p>${chocolate.price} €</p>
          <p>Note : ${noteStars}</p>
          <button class="addpanier">Ajouter au panier</button>
        </li>`;
      }).join("");

      // Fonction ajouter au panier
      const addPanier = document.querySelectorAll('.addpanier');
      addPanier.forEach((button, index) => {
        button.addEventListener("click", () => {
          addToCart(index)
          location.reload();
          totalPanier++;
        });
      });

    }
fetchChocolate();
nombreArticle()

function addToCart(index) {
  let item = {
    id: dataChocolate[index].id,
    title: dataChocolate[index].title,
    price: dataChocolate[index].price,
    image : dataChocolate[index].image,
    quantity: 1
  };
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  let existingItem = cart.find((chocolate) => chocolate.id == item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(item);
  }
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function removeToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  let item = cart[index];
  if (item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart.splice(index, 0);
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

}
//Bouton reinitialiser le panier
empty.addEventListener("click", () => {
localStorage.clear();
location.reload();
})
// Fermer le panier
closePanier.addEventListener("click" ,() => {
cardbasket.style.visibility = "hidden";
} )
// Ouvrir le panier
panier.addEventListener("click" ,() => {
  cardbasket.style.visibility = "visible";
  } )
  //validation du panier
  valide.addEventListener("click" , () => {
    alert("Vous venez de valider votre panier! Veuillez procéder au paiement.")
  })