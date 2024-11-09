//# PHẦN CODE DÙNG CHUNG, chủ yếu là xử lý giao diện

// Xử lý khi nhấn vào nút Thêm vào giỏ hàng
$(document).ready(function() {
    $('.add-to-cart').click(function(event) {
    	//Add chút hiệu ứng khi thêm vào giỏ hàng thôi chứ chã có gì là đặc sắc
    	$('.sticky-bottom .basket-item-count.count_item_pr').addClass('hieu-ne');
    });
});

// Nhấp vào nút Đăng ký để hiện form Đăng ký
$('#skipReg').click(function(event) {
	$('#modal-login').css('display', 'none');
	$('#modal-reg').css('display', 'block');
});

$('#btnInfo').click(function(event) {
	$('#userInfo').css('display', 'block');
});

$('#closeInfo').click(function(event) {
	$('#userInfo').css('display', 'none');
});

// và ngược lại....
$('#backLogin').click(function(event) {
	$('#modal-login').css('display', 'block');
	$('#modal-reg').css('display', 'none');
});

$('#btnmanageAcc').click(function(event) {
	if ($('#manageAcc').css('display', 'none')) {
		$('#manageAcc').css('display', 'block');
	} else if ($('#manageAcc').css('display', 'block')) {
		$('#manageAcc').css('display', 'none');
	}
	
});


// sticky cart: icon cart sẽ cố định góc dưới bên phải khi cuộn trang
window.onscroll = function() {myFunction()};

var cart_icon = document.getElementById("items-cart-inner");
var stickybottom = cart_icon.offsetTop;

function myFunction() {
  if (window.pageYOffset > stickybottom) {
    cart_icon.classList.add("sticky-bottom");
  } else {
    cart_icon.classList.remove("sticky-bottom");
  }
}


// Một chút dùng chung cho tài khoản
function displayUserFullNameInUser() {
	for (let i = 0; i <= account.length - 1; i++) { 
		if(account[i].username == loginArr[0].username) {
			document.getElementById("adminName").innerHTML = account[i].name;
			document.getElementById("d_name").innerHTML = account[i].name;
			document.getElementById("d_username").innerHTML = account[i].username;
			document.getElementById("d_usernamex").innerHTML = account[i].username;
		}
	}
}
displayUserFullNameInUser();

var loginArr;
function logout() {
	loginArr = [];
	saveUserLogin();
	window.location.reload();
}

function getNewPassword() {
	var newPass = document.getElementById("inputNewPass").value;

	
	for (let i = 0; i <= account.length - 1; i++) { 
		if(account[i].username == loginArr[0].username) {

		account[i] = ({
			username : account[i].username,
			name : account[i].name,
		    password : document.getElementById("inputNewPass").value,
		    role : account[i].role,
		    status: account[i].status   
		});
			localStorage.setItem("listAcc", JSON.stringify(account));
		}
	}
}

function getHightLightPassword() {
	$('#innerChangePassword').click(function(event) {
		$('#userInfo').css('display', 'block');
		$('#inputNewPass').css('border', '1px solid #ccc');
	});
}
getHightLightPassword();