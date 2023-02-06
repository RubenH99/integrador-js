// Contenedor de productos
const products = document.querySelector(".products--container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart--container");
//El total en precio del carrito
const total = document.querySelector(".price--total");
// El contenedor de las categorías
const categories = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón de ver más
const btnLoad = document.querySelector(".btn__load");
// Botón de comprar
const buyBtn = document.querySelector(".btn--buy");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart--label");
//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart--bubble");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu--label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar--list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add--modal");
//  Boton de borrado del carrito.
const deleteBtn = document.querySelector(".btn--delete");

// let cart = JSON.parse(localSotrage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, name, price, productImg } = product;
  return `
  <div class="product--card">
  <div class="product--img">
  <img
  src="${productImg}"
  alt="${name}"
  />
  </div>  
 
  <h3>${name}</h3>

  <div class="product--price">
    <p>Precio:</p>
    <span>$${price}</span>
  </div>
  <button 
     class="btn--add"
     data-id="${id}"
     data-name="${name}"
     data-price="${price}"
     data-img="${productImg}"
     >Comprar</button>
  </div>`;
};

const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join("");
};

const renderFilterProducts = (category) => {
  const productsList = productsData.filter((product) => {
    return product.category === category;
  });
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilterProducts(category);
};

const changeShowMoreBtnStatus = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeShowMoreBtnStatus(selectedCategory);
  changeBtnActiveState(selectedCategory);
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) {
    return;
  } else {
    changeFilterState(e);
  }
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productsController.nextProductsIndex = 1;
  }
};

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
};

init();

// Para el color puedo hacer que el array de cada producto del color, ejemplo color[], revisarlo con un for.
// Y que con cada elemento de ese array agregue la classlist.add de dicho elemento.
// Otra opcion es luego de que se rendericen las card si el color, hacer que se rendericen los colores con otra funcion
