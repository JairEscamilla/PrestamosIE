(function(){
  const cartIcon = document.querySelector(".cart-icon");
  const cartContainer = document.querySelector(".cart-container");

  document.addEventListener('click', (event) => {
    if (event.target != cartIcon && !event.target.closest(".cart-container.active")){
      cartIcon.classList.remove('active');
      cartContainer.classList.remove('active');
    }
  })

  cartIcon.addEventListener('click', () => {
    cartIcon.classList.toggle('active');
    cartContainer.classList.toggle('active');
  });

})();