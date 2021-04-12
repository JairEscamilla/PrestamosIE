(function(){
  const cartIcon = document.querySelector(".cart-icon");
  const cartContainer = document.querySelector(".cart-container");

  document.addEventListener('click', () => {
    
  })

  cartIcon.addEventListener('click', () => {
    cartIcon.classList.toggle('active');
    cartContainer.classList.toggle('active');
  });

})();