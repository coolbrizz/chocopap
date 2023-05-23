<<<<<<< HEAD
//Appel du fichier JSON
=======
const menuBurger = document.getElementById('btn');
const sidebar = document.getElementById('side-bar');
const content = document.getElementById('conteneur');
const result = document.getElementById('result')
const body =document.getElementById('logo')
const afficheProduit = document.getElementById('afficheProduit')
var clickChocolate;
let click;
let dataChocolate = [];

>>>>>>> 6e7b6a8fde809e549692dff96c9468ce0985e361
async function fetchChocolate(){
  await fetch ("products.json")
    .then((res)=>res.json())
    .then((data)=>(dataChocolate = data));
    chocolateDisplay();
    panierDisplay();
    nombreArticle();
    }

<<<<<<< HEAD
//Adaptation du filtre en responsive
function openCategories(){
openCategoryElement.classList.toggle('active');
openCategory.classList.toggle('active');
}
function openPrice(){
  openCategoryPrice.classList.toggle('active');
  openPrices.classList.toggle('active');
}
function openNote(){
  openCategoryNote.classList.toggle('active');
  openNotes.classList.toggle('active');
}


//Constante pour le filtre 
const checkboxTous = document.querySelector('#tous');
const checkboxBlanc = document.querySelector('#blanc');
const checkboxLait = document.querySelector('#lait');
const checkboxNoir = document.querySelector('#noir');
const checkboxNoix = document.querySelector('#noix');
const checkboxFruit = document.querySelector('#fruit');
const checkboxCaramel = document.querySelector('#caramel');
const checkboxLiqueur = document.querySelector('#liqueur');
const resultatProduits = document.querySelector('#result');
const miniNotes= document.querySelector('#noteMini');
const maxiNotes = document.querySelector('#noteMaxi');
const miniPrice= document.querySelector('#pricedown');
const maxiPrice = document.querySelector('#priceup');
checkboxTous.checked = true;

// Ecouteur d'événement pour le filtre Prix
let selectedMiniPrice = 2;
let selectedMaxiPrice = 20;
miniPrice.addEventListener("change", () => {selectedMiniPrice = miniPrice.value;chocolateDisplay()});
maxiPrice.addEventListener("change", () => {selectedMaxiPrice = maxiPrice.value;chocolateDisplay()});

// // Ecouteur d'événement pour le filtre Notes
let selectedMiniNotes = 1;
let selectedMaxiNotes = 5;
miniNotes.addEventListener("change", () => {selectedMiniNotes = miniNotes.value;chocolateDisplay()});
maxiNotes.addEventListener("change", () => {selectedMaxiNotes = maxiNotes.value;chocolateDisplay();});

// Ecouteur d'événement pour les checkboxs
  checkboxTous.addEventListener('change', () => {
  !checkboxTous.checked;  checkboxBlanc.checked=false;
  checkboxLait.checked=false;  checkboxNoir.checked=false;  checkboxNoix.checked=false;  checkboxFruit.checked=false;
  checkboxCaramel.checked=false;  checkboxLiqueur.checked=false;
    chocolateDisplay();
  });
  checkboxBlanc.addEventListener('change', () => {
    checkboxTous.checked = false;
    checkboxBlanc.checked;
    chocolateDisplay()});
  checkboxLait.addEventListener('change', () => {
    checkboxLait.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});
  checkboxNoir.addEventListener('change', () => {
    checkboxNoir.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});
  checkboxNoix.addEventListener('change', () => {
    checkboxNoix.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});
  checkboxFruit.addEventListener('change', () => {
    checkboxFruit.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});
  checkboxCaramel.addEventListener('change', () => {
    checkboxCaramel.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});
  checkboxLiqueur.addEventListener('change', () => {
    checkboxLiqueur.checked;
    checkboxTous.checked = false;
    chocolateDisplay()});



    function chocolateDisplay() {
      let noteStars = "";
      result.innerHTML = dataChocolate
      .filter((chocolate) =>{
        let chocolateFiltres = [];
          // Si toutes les cases à cocher sont cochées, ajoutez tous les produits
          if (checkboxTous.checked) {
            chocolateFiltres.push(chocolate);
          } else {
            // Sinon, vérifiez chaque case à cocher individuellement
            if (checkboxBlanc.checked && chocolate.category.blanc && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice 
              && selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes
              ) {
                chocolateFiltres.push(chocolate)
            } else if (checkboxLait.checked && 
              chocolate.category.lait && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
                chocolateFiltres.push(chocolate);
            } else if (checkboxNoir.checked && 
              chocolate.category.noir && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
               chocolateFiltres.push(chocolate);
            } else if (checkboxNoix.checked && 
              chocolate.category.noix && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
               chocolateFiltres.push(chocolate);
            } else if (checkboxFruit.checked && 
              chocolate.category.fruit && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
                chocolateFiltres.push(chocolate);
            } else if (checkboxCaramel.checked && 
              chocolate.category.caramel && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
                chocolateFiltres.push(chocolate);
            } else if (checkboxLiqueur.checked && 
              chocolate.category.liqueur && 
              selectedMiniPrice < chocolate.price && 
              chocolate.price< selectedMaxiPrice&&
              selectedMiniNotes<= chocolate.note &&
              chocolate.note <= selectedMaxiNotes) {
                chocolateFiltres.push(chocolate);
          }

    }          return chocolateFiltres.length > 0;})
      .map((chocolate) => {
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
          <img src=/${chocolate.image} alt="photo${chocolate.image}" class="imageCard" data-id="${chocolate.id}" onclick="openProduitsPage()" >
          <h2 onclick="openProduitsPage()"> ${chocolate.title}</h2>
          <p>${chocolate.price} €</p>
          <p>Note : ${noteStars}</p>
          <button class="addpanier">Ajouter au panier</button>
        </li>`;     

      }).join("");

      const imageCarte = document.querySelectorAll('.imageCard')
      imageCarte.forEach((image) => {
      image.addEventListener("click",(e) => {
      productId = e.target.getAttribute("data-id");
      ajouterIdProduit(productId);
      })
    })
      // Fonction ajouter au panier
      const addPanier = document.querySelectorAll('.addpanier');
      addPanier.forEach((button, index) => {
        button.addEventListener("click", () => {
          addToCart(index);
        });
      });

    }
// affiche le nombre d'article dans la navigation
function nombreArticle(){
 nombreArticles = cartItems.length;
  nbArticles.innerHTML = nombreArticles;
}
function ajouterIdProduit(productId){
sessionStorage.setItem("productId", productId)
}
function panierDisplay(){
  articles.innerHTML = cartItems.map((items, index) => {        
    return `<li class="cardarticles">
    <span class='enleverProduit'>X</span>
    <img src=/${items.image} alt="photo${items.image}">
    <div class="sousCardArticles">
      <h3> ${items.title}</h3>
      <p>${items.price} €</p>
    </div>
    <p class="qty">${items.quantity}</p>
    <span class="plus" data-index="${index}">+</span><span class="moins" data-index="${index}"> - </span>
    `
  }).join("");
  const plus = document.querySelectorAll(".plus");
  const moins = document.querySelectorAll(".moins");
  const closePanier = document.querySelectorAll('.closePanier');
  const enleverProduits = document.querySelectorAll('.enleverProduit')

  enleverProduits.forEach((button, index) => {
    button.addEventListener("click", () => {
      removeToCart(index);
    });
  });
  plus.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;
      cartItems[index].quantity++;
      panierDisplay();
      calculTotal(index);
    });
  });

  moins.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;
      if (cartItems[index].quantity > 0 ){
      cartItems[index].quantity--;
      panierDisplay();
      calculTotal(index)
    }else{
      removeToCart(index)
      }
    });
  });
}
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
  cartItems = cart;
  nombreArticle();
  panierDisplay();
  calculTotal(index)
}

function removeToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  let item = cart[index];
  if (item) {
      cart.splice(index, 1);
    }
  localStorage.setItem("cartItems", JSON.stringify(cart));
  cartItems = cart;
  nombreArticle();
  panierDisplay();
  calculTotal();
}

function calculTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].quantity * cartItems[i].price;
  }
  totalPanier.innerHTML = total.toFixed(2) + " €";
}

// Bouton reinitialiser le panier
empty.addEventListener("click", () => {
localStorage.clear();
nombreArticle();
panierDisplay();
location.reload();
cardbasket.style.visibility = "visible";
=======

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
>>>>>>> 6e7b6a8fde809e549692dff96c9468ce0985e361
})
// Fermer le panier
function fermerPanier(){
  cardbasket.classList.toggle('active');
  }
// Ouvrir le panier
function ouvrirPanier(){
  cardbasket.classList.toggle('active');
  calculTotal();
  }
  //validation du panier
  valide.addEventListener("click" , () => {
    alert("Vous venez de valider votre panier! Veuillez procéder au paiement.")
  })

function openProduitsPage(){

  window.location.href="/produits.html";

}

  fetchChocolate();

