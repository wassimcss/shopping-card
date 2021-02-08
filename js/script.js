var btnAdd = document.getElementsByClassName("add");
var btnRemove = document.getElementsByClassName("remove");
var check = document.getElementsByClassName("check");
// console.log(btnAdd)

for (var i = 0; i < btnAdd.length; i++) {
  btnAdd[i].addEventListener("click", add);
  btnRemove[i].addEventListener("click", remove);
  check[i].addEventListener("click", total);
}
function add(e) {
  //change qunantity
  var inputTag = e.target.parentElement.querySelector(".quantity");
  var quantity = parseInt(inputTag.value);
  quantity++;
  //  console.log(quantity)
  inputTag.value = quantity;
  // price calculation
  var unitPriceTag = e.target.parentElement.parentElement.querySelector(
    ".unitPrice"
  );
  var priceTag = e.target.parentElement.parentElement.querySelector(".price");
  var unitPrice = parseInt(unitPriceTag.innerHTML);
  var price = parseInt(priceTag.innerHTML);
  //  console.log(price)
  // console.log(unitPrice)
  price = quantity * unitPrice;
  priceTag.innerHTML = price;
}

function remove(e) {
  //change qunantity
  var inputTag = e.target.parentElement.querySelector(".quantity");
  var quantity = parseInt(inputTag.value);
  if (quantity > 0) {
    quantity--;
  }
  //  console.log(quantity)
  inputTag.value = quantity;
  // price calculation
  var unitPriceTag = e.target.parentElement.parentElement.querySelector(
    ".unitPrice"
  );
  var priceTag = e.target.parentElement.parentElement.querySelector(".price");
  var unitPrice = parseInt(unitPriceTag.innerHTML);
  var price = parseInt(priceTag.innerHTML);
  //  console.log(price)
  // console.log(unitPrice)
  price = quantity * unitPrice;
  priceTag.innerHTML = price;
}

function total(e) {
  var totalTag = document.getElementById("total");
  var total = parseInt(totalTag.innerHTML);
  //console.log(total);
  var checkItem = e.target;
  if (checkItem.checked) {
    total +=
      
      parseInt(
        checkItem.parentElement.parentElement.querySelector(".price").innerHTML
      );
    totalTag.innerHTML = total;
  } else {
    total -=
    
    parseInt(
      checkItem.parentElement.parentElement.querySelector(".price").innerHTML
    );
  totalTag.innerHTML = total;
  }
}
