//affiche le nombre d'article dans la navigation
function nombreArticle(){
    nombreArticles = cartItems.length;
    nbArticles.innerHTML = nombreArticles;
  }

//Affiche les éléments du local storage dans le Panier
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
//Calcul du panier
function calculTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].quantity * cartItems[i].price;
    }
    totalPanier.innerHTML = total.toFixed(2) + " €";
  }
  
  //Bouton reinitialiser le panier
  empty.addEventListener("click", () => {
  localStorage.clear();
  nombreArticle();
  panierDisplay();
  location.reload();
  cardbasket.style.visibility = "visible";
  })
    //validation du panier
    valide.addEventListener("click" , () => {
      alert("Vous venez de valider votre panier! Veuillez procéder au paiement.")
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

  panierDisplay();
  nombreArticle();