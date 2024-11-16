// Khai báo mảng và tạo các constructor để đẩy dữ liệu vào mảng
var shoppingCart = (function() {
  cart = [];

  function Item(code, name, image, price, count) {
    this.code = code;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
  }
  

// Lưu dữ liệu vào Session Storage
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  

// Lấy dữ liệu trong mảng từ Sessin ra
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  


  var _object = {};
  
  // Thêm sản phẩm vào giỏ hàng
  _object.addItemToCart = function(code, name, image, price, count) {
    for(var item in cart) {
      if(cart[item].code === code) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(code, name, image, price, count);
    cart.push(item);
    saveCart();
  }

  // Đếm các sản phẩm trong giỏ hàng
  _object.setCountForItem = function(code, count) {
    for(var i in cart) {
      if (cart[i].code === code) {
        cart[i].count = count;
        break;
      }
    }
  };

// xóa từng (MỘT) sản phẩm từ giỏ hàng
  _object.removeItemFromCart = function(code) {
      for(var item in cart) {

        console.log(cart[item].code);
        console.log(code)

        if(cart[item].code === code) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Xóa luôn sản phẩm từ giỏ hàng
  _object.removeItemFromCartAll = function(code) {
    for(var item in cart) {
      if(cart[item].code === code) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Xóa tất cả sản phẩm có trong giỏ hàng
  _object.clearCart = function() {
    cart = [];
    saveCart();
  }


  // Count cart 
  _object.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  _object.totalCart = function() {
    var totalCart = 0;

    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return formatNumber(Number(totalCart.toFixed(0)), '.', ',');
  }

  

  // List cart
  _object.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(0);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  return _object;
})();




// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var code = String($(this).data('code'));
  var name = $(this).data('name');
  var image = $(this).data('image');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(code, name, image, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});

// Format tiền tệ
function formatNumber(nStr, decSeperate, groupSeperate) {
    nStr += '';
    x = nStr.split(decSeperate);
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
    }
    return x1 + x2;
}

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td><img style='width: 50px;' src='" + cartArray[i].image + "' alt='product image'/></td>" 
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>" + formatNumber(cartArray[i].price, '.', ',') + " ₫</td>"
      + "<td style='width: 135px;'><div class='input-group'>"
      + "<button class='minus-item input-group-addon btn btn-primary' data-code='" + cartArray[i].code + "' data-name=" + cartArray[i].name + ">-</button>" 
      + "<input type='text' disabled class='item-count form-control' data-code='" + cartArray[i].code + "' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-code='" + cartArray[i].code + "' data-name=" + cartArray[i].name + ">+</button>"
      + "</div></td>"
      + "<td><button class='delete-item btn btn-danger' data-code='" + cartArray[i].code + "' data-name=" + cartArray[i].name + "><i class='fa fa-trash-o' aria-hidden='true'></i></button></td>"
      + " = " 
      + "<td>" + formatNumber(cartArray[i].total, '.', ',') + " ₫</td>" 
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
 
  $('.total-count').html(shoppingCart.totalCount());
}

  

function displayCartInCheckout() {
  var cartArray = shoppingCart.listCart();

  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td><img style='width: 50px;' src='" + cartArray[i].image + "' alt='product image'/></td>" 
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>" + formatNumber(cartArray[i].price, '.', ',') + " ₫</td>"
      + "<td style='width: 75px;'><div class='input-group'>"
      + "<input type='text' disabled class='item-count form-control' data-code='" + cartArray[i].code + "' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "</div></td>"
      + " = " 
      + "<td>" + formatNumber(cartArray[i].total, '.', ',') + " ₫</td>" 
      +  "</tr>";
  }
  $('.show-cart-inCheckout').html(output);
  $('.total-cart').html(shoppingCart.totalCart());

  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button
$('.show-cart').on("click", ".delete-item", function(event) {
  var code = String($(this).data('code'));
  shoppingCart.removeItemFromCartAll(code);
  displayCart();
})

// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var code = String($(this).data('code'));
  shoppingCart.removeItemFromCart(code);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var code = String($(this).data('code'));
  shoppingCart.addItemToCart(code);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var code = String($(this).data('code'));
   var count = Number($(this).val());
  shoppingCart.setCountForItem(code, count);

  displayCart();
});

displayCart();
displayCartInCheckout();


// Hoàn tất thanh toán
function checkoutSuccess () {
  cart = [];
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  alert("Thanh toán thành công");
  window.location.reload();
}
