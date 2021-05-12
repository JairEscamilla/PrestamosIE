const $button = document.querySelector(".plus-button");
const $select = document.querySelector(".quantity-select");
const $dialog = document.querySelector("#dialog");
const $closeModal = document.querySelector("#close-modal");
const $dialogDescription = document.querySelector(".dialog-description");
const $dtButton = document.querySelector(".dtButton");


$button.addEventListener("click", () => {
  $dialogDescription.innerHTML = `Se han agregado ${$select.value} item(s) al carrito`;
  $dialog.showModal();
});

$closeModal.addEventListener("click", () => {
  $dialog.close();
})