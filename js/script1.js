var btnAdd = document.getElementsByClassName("add");
var btnRemove = document.getElementsByClassName("remove");
var check = document.getElementsByClassName("check");
var deleteBtn = document.getElementsByClassName("delete");
var heart = document.getElementsByClassName("fas");

for (var i = 0; i < btnAdd.length; i++) {
  btnAdd[i].addEventListener("click", add);
  btnRemove[i].addEventListener("click", remove);
  check[i].addEventListener("click", total);
  heart[i].addEventListener("click", like);
  deleteBtn[i].addEventListener("click", deleteItem);
}

function add(e) {
  // quantity
  var btnTag = e.target;
  var inputTag = btnTag.parentElement.querySelector(".quantity");
  var quantity = inputTag.value;
  quantity++;
  inputTag.value = quantity;
  // price
  var priceTag = e.target.parentElement.parentElement.querySelector(".price");
  var price = parseInt(priceTag.innerHTML);

  var unitPrice = parseInt(
    priceTag.parentElement.querySelector(".unitPrice").innerHTML
  );

  price = unitPrice * quantity;
  priceTag.innerHTML = price;
}
function remove(e) {
  // quantity
  var btnTag = e.target;
  var inputTag = btnTag.parentElement.querySelector(".quantity");
  var quantity = inputTag.value;
  if (quantity > 0) {
    quantity--;
  }
  inputTag.value = quantity;
  // price
  var priceTag = btnTag.parentElement.parentElement.querySelector(".price");
  var price = parseInt(priceTag.innerHTML);

  var unitPrice = parseInt(
    priceTag.parentElement.querySelector(".unitPrice").innerHTML
  );

  price = unitPrice * quantity;
  priceTag.innerHTML = price;
}
function total(e) {
  var checkItem = e.target;
  var totalTag = document.getElementById("total");
  var total = parseInt(totalTag.innerHTML);
  var priceTag = checkItem.parentElement.parentElement.querySelector(".price");
  var price = parseInt(priceTag.innerHTML);
  if (checkItem.checked) {
    total = total + price;
    totalTag.innerHTML = total;
  } else {
    total = total - price;
    totalTag.innerHTML = total;
  }
}
function deleteItem(e) {
  // if (e.target.classList.contains("delete")) {
  //   prooduct =  e.target.parentElement.parentElement
  //   prooduct.remove()
  //   total(e)

  // }
  var productTag = e.target.parentElement.parentElement;
  productTag.remove();
  total(e);
}
function like(e) {
  var heartTag = e.target;
  console.log(heartTag.style.color)
  if (heartTag.style.color != "pink") {
    heartTag.style.color = "pink";

  } else {
    heartTag.style.color = "black";
  }
}
