const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryID = urlParams.get('category');
const row = document.body.querySelector('.row');

const catalogueTitle = document.body.querySelector('#category-title');
catalogueTitle.innerHTML = `<i id="backButton" class="fas fa-arrow-alt-circle-left"></i>Categoría ${categoryID}`;
const backButton = document.body.querySelector('#backButton');

backButton.addEventListener('click', () => {
  window.location = "./layout.html";  
});

const createMaterialCards = () => {
  let i;
  for(i = 1; i < 10; i++) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('hoverable');
    div.innerHTML = `
      <div class="card-image">
        <img src="./images/material.jpg" alt="">
      </div>
      <div class="card-details">
        <h3>Material ${i}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, dolorum. Consectetur nemo iusto dolor inventore dignissimos vitae, aspernatur est, nulla a odio temporibus, minus placeat non qui dolores fugiat quas.</p>
        <a class="material-button" href="material_description.html?material=${i}">Ver detalle<i class="iconButton fa fa-cart-plus"></i></a>
      </div>
    `;
    row.append(div);
  }
  

};

createMaterialCards()