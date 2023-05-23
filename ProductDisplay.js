const idProduct = sessionStorage.getItem("productId");
const product = document.querySelector(".produits")

let quantityElement = 1;

async function fetchChocolate(){
    await fetch ("products.json")
      .then((res)=>res.json())
      .then((data)=>(dataChocolate = data));
      productDisplay()
      }
function productDisplay(){
product.innerHTML =dataChocolate.filter((chocolate) =>{
return idProduct == chocolate.id
})
.map((chocolate,index) => {
    return `
        <div class="description">
            <div class="descriptionProduits">
                <img src=/${chocolate.image} alt="photo${chocolate.image}" class="imageCard img" data-id="${chocolate.id}" >
                <div class="descriptionSupp">
                    <h2> ${chocolate.title}</h2>
                    <p>${chocolate.price} €</p>
                    <p> ${chocolate.description}</p>
                    <div class="containerQte">
                    <p class="qty">1</p><span class="plus">+ </span><span class="moins"> -</span>
                    </div>
                    <button class="addpanier">Ajouter au panier</button>
                </div>
            </div>
        <div class="ingredients">
            <h2>INGREDIENTS</h2>
            <p>${chocolate.ingredients}</p>
        </div>
        </div>`

}).join("");
const plus = document.querySelectorAll(".plus");
const moins = document.querySelectorAll(".moins");
const qtyElement = document.querySelector(`.qty`);
let quantity = 1;

plus.forEach((button) => {
  button.addEventListener("click", () => {
    quantity++;
    qtyElement.textContent = quantity;
quantityElement=quantity
  })});
  moins.forEach((button) => {
    button.addEventListener("click", () => {
        if (quantity > 1){
      quantity--;
      quantityElement=quantity
      qtyElement.textContent = quantity;
      }else{quantity = 1}

    });
});
//Encadre les images qui ne sont pas sur fond blanc
const imageCard = document.querySelector(".img")
if
(idProduct == "4" || idProduct == "5" || idProduct == "6" ||idProduct == "9" ){
imageCard.style.border = "solid 2px var(--lightchoco)";
}
//Appelle la fonction ajouter au panier
const addPanier = document.querySelectorAll('.addpanier');
addPanier.forEach((button) => {
  button.addEventListener("click", () => {
    const idProduct = imageCard.dataset.id-1;
    addToCart(idProduct);
  });
});
}

function addToCart(idProduct) {
    let item = {
      id: dataChocolate[idProduct].id,
      title: dataChocolate[idProduct].title,
      price: dataChocolate[idProduct].price,
      image : dataChocolate[idProduct].image,
      quantity: quantityElement,
    };
    console.log(quantityElement)
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let existingItem = cart.find((chocolate) => chocolate.id == item.id);
    if (existingItem) {
      existingItem.quantity = quantityElement;
    } else {
      cart.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
    cartItems = cart;
    nombreArticle();
    panierDisplay();
    calculTotal()
  }
fetchChocolate();