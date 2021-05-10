const row = document.body.querySelector('.row');

const createCards = () => {
  let i;
  for(i = 1; i < 7; i++) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('hoverable');
    div.innerHTML = `
      <div class="card-image">
        <img src="images/categories/category${i}.jpg" alt="">
      </div>
      <div class="card-details">
        <h3>Categoría ${i}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, dolorum. Consectetur nemo iusto dolor inventore dignissimos vitae, aspernatur est, nulla a odio temporibus, minus placeat non qui dolores fugiat quas.</p>
        <a class="material-button" href="material.html?category=${i}">Detalles<i class="iconButton fa fa-arrow-right"></i></a>
      </div>
    `;
    row.append(div);
  }
  

};

createCards()