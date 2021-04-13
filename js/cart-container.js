(function(){
  const cartIcon = document.querySelector(".cart-icon");
  const cartContainer = document.querySelector(".cart-container");

  document.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target != cartIcon){
      cartIcon.classList.remove('active');
      cartContainer.classList.remove('active');
    }
  })

  cartIcon.addEventListener('click', () => {
    cartIcon.classList.toggle('active');
    cartContainer.classList.toggle('active');
  });

})();