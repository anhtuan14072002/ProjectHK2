
 // - - - - - - - - - - - - - - - - - - - - - - - -
 // 	Hiển thị thông tin thanh toán
 // - - - - - - - - - - - - - - - - - - - - - - - -
function displayCheckoutInfo() {
	var checkoutName = document.getElementById("getCustomerName").value;
	var checkoutEmail = document.getElementById("getCustomerEmail").value;
	var checkoutPhone = document.getElementById("getCustomerPhone").value;
	var checkoutAddress = document.getElementById("getCustomerAddress").value;
	var checkoutProvince = document.getElementById("id_parent").value;
	var checkoutDistrict = document.getElementById("id_child").value;
	var checkoutgetCustomerNote = document.getElementById("getCustomerNote").value;

	

	// Map giá trị của select list cho Tỉnh Thành phố
	if (checkoutProvince==="dn") {
		$('#disid_parent').html(checkoutProvince="Đà Nẵng");
	} else if (checkoutProvince==="hcmc") {
		$('#disid_parent').html(checkoutProvince="Hồ Chí Minh");
	} else if (checkoutProvince==="hn") {
		$('#disid_parent').html(checkoutProvince="Hà Nội");
	} else {
		$('#disid_parent').html(checkoutProvince="---");
	}

	// Tiếp tục map
	if (checkoutDistrict==="dn_hc") {
		$('#disid_child').html(checkoutDistrict="Hải Châu");
	} else if (checkoutDistrict==="dn_lc") {
		$('#disid_child').html(checkoutDistrict="Liên Chiểu");
	} else if (checkoutDistrict==="dn-cl") {
		$('#disid_child').html(checkoutDistrict="Cẩm Lệ");
	} else if (checkoutDistrict==="hcmc1") {
		$('#disid_child').html(checkoutDistrict="Quận 1");
	} else if (checkoutDistrict==="hcmc2") {
		$('#disid_child').html(checkoutDistrict="Quận 2");
	} else if (checkoutDistrict==="hcmc3") {
		$('#disid_child').html(checkoutDistrict="Quận 3");
	} else if (checkoutDistrict==="hcmc4") {
		$('#disid_child').html(checkoutDistrict="Quận 4");
	} else if (checkoutDistrict==="hcmc5") {
		$('#disid_child').html(checkoutDistrict="Quận 5");
	} else if (checkoutDistrict==="hcmc6") {
		$('#disid_child').html(checkoutDistrict="Quận 6");
	} else if (checkoutDistrict==="hcmc7") {
		$('#disid_child').html(checkoutDistrict="Quận 7");
	} else if (checkoutDistrict==="hcmc8") {
		$('#disid_child').html(checkoutDistrict="Quận 8");
	} else if (checkoutDistrict==="hcmc9") {
		$('#disid_child').html(checkoutDistrict="Quận 9");
	} else if (checkoutDistrict==="hn1") {
		$('#disid_child').html(checkoutDistrict="Thanh Xuân");
	} else if (checkoutDistrict==="hn2") {
		$('#disid_child').html(checkoutDistrict="Cầu Giấy");
	} else if (checkoutDistrict==="hn3") {
		$('#disid_child').html(checkoutDistrict="Hoàn Kiếm");
	} else if (checkoutDistrict==="hn4") {
		$('#disid_child').html(checkoutDistrict="Đống Đa");
	} else if (checkoutDistrict==="hn5") {
		$('#disid_child').html(checkoutDistrict="Ba Đình");
	} else if (checkoutDistrict==="hn6") {
		$('#disid_child').html(checkoutDistrict="Tây Hồ");
	} else if (checkoutDistrict==="hn7") {
		$('#disid_child').html(checkoutDistrict="Từ Liêm");
	} else {
		$('#disid_child').html(checkoutDistrict="---");
	}

	$('#disCustomerName').html(checkoutName);
	$('#disCustomerEmail').html(checkoutEmail);
	$('#disCustomerPhone').html(checkoutPhone);
	$('#disCustomerAddress').html(checkoutAddress);
	$('#disCustomerNote').html(checkoutgetCustomerNote);

	var typeTrans = $(".ck-formcheck input[type=radio]:checked").val();
	if (typeTrans==="tt1") {
		$('#disTrans').html(typeTrans="Thanh toán khi nhận hàng");
	} else if (typeTrans==="tt2") {
		$('#disTrans').html(typeTrans="Chuyển khoản khi nhận hàng");
	} else if (typeTrans==="tt3") {
		$('#disTrans').html(typeTrans="Thanh toán online");
	} else {
		$('#disTrans').html(typeTrans="---");
	}
	

	var cartArray = shoppingCart.listCart();

  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td><img style='width: 40px;' src='" + cartArray[i].image + "' alt='product image'/></td>" 
      + "<td class='sm-titl'>" + cartArray[i].name + "<span>" + formatNumber(cartArray[i].price, '.', ',') + " ₫ <span class='sm-count'>x "+cartArray[i].count+"</span></span></td>" 
      + "<td class='sm-ttl'>" + formatNumber(cartArray[i].total, '.', ',') + " ₫</td>" 
      +  "</tr>";
  }
  $('.show-cart-CheckoutBill').html(output);
  $('.total-cart-CheckoutBill').html(shoppingCart.totalCart());
  
  
  $('.total-count-CheckoutBill').html(shoppingCart.totalCount());
  	if (checkoutName == "") {

		alert("Vui lòng nhập họ tên");
		window.location.reload();

	} else if (checkoutEmail == "") {
		alert("Vui lòng nhập địa chỉ email");
		window.location.reload();

	} else if(checkoutPhone == "") {
		alert("Vui lòng nhập số điện thoại");
		window.location.reload();

	} else if (checkoutAddress == "") {
		alert("Vui lòng nhập địa chỉ nhận hàng");
		window.location.reload();

	} else {

	}
}


	// displayCheckoutInfo();

// -- end ----> Hiển thị thông tin thanh toán - - - - - - - - - - - - - - - - - - - - - - - -

