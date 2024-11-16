// Tạo mảng lưu thông tin users
var account = [{
	username: "admin",
	name: "Nguyễn Thị Admin",
	password: "123",
	role: "admin",
	status: "kích hoạt"
},
{
	username: "quochieu",
	name: "Hồ Quốc Hiếu",
	password: "123",
	role: "admin",
	status: "kích hoạt"
},
{
	username: "mychi",
	name: "Trần Thị Mỹ Chi",
	password: "123",
	role: "admin",
	status: "kích hoạt"
},
{
	username: "locpv",
	name: "Phan Văn Lộc",
	password: "123",
	role: "admin",
	status: "khóa"
}
,
{
	username: "namtt",
	name: "Trần Thanh Nam",
	password: "123",
	role: "user",
	status: "kích hoạt"
}
,
{
	username: "hoangthien",
	name: "Nguyễn Phan Hoàng Thiện",
	password: "123",
	role: "admin",
	status: "kích hoạt"
}
,
{
	username: "hienhd",
	name: "Hoàng Đức Hiền",
	password: "123",
	role: "seller",
	status: "kích hoạt"
}
,
{
	username: "quocnv",
	name: "Nguyễn Văn Quốc",
	password: "123",
	role: "seller",
	status: "kích hoạt"
}];

// Đẩy tất cả user vào localStorage
function saveChangeAcc() {
    localStorage.setItem('listAcc', JSON.stringify(account));
}

// Lấy dữ liệu Tài khoản trong mảng từ local ra
function loadAcc() {
    account = JSON.parse(localStorage.getItem('listAcc'));
}
if (localStorage.getItem("listAcc") != null) {
    loadAcc();
}





var specialFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



// Chức năng đăng ký, khi đăng ký, mặc định role là user
var register = function () {
	localUser = JSON.parse(localStorage.getItem('listAcc'));
	var username = String(document.getElementById("username").value);
	var password = String(document.getElementById("password").value);

	var reg_username = String(document.getElementById("reg_username").value);
	var reg_name = String(document.getElementById("reg_name").value);
	var reg_password = String(document.getElementById("reg_password").value);
	var reg_repassword = String(document.getElementById("reg_repassword").value);

	var localUser = {
		username : document.getElementById("reg_username").value,
		name : document.getElementById("reg_name").value,
		password : document.getElementById("reg_password").value,
		role: "user",
		status: "kích hoạt"
	};

	

	$('#modal-reg').css('display', 'none');
	$('#modal-login').css('display', 'block');

	// Kiểm tra dữ liệu nhập vào
	if (reg_username=="" || reg_password=="") {
		var error = "Vui lòng nhập username hoặc password";
		document.getElementById("error").innerHTML = error;
	} else
	if (reg_username.length<5 || reg_username.length>30) {
		var error = "Username phải có đồ dài từ 4-29 kí tự";
		document.getElementById("error").innerHTML = error;
	} else 
	if (reg_username.includes(" ")) {
		var error = "Username không bao gồm dấu cách";
		document.getElementById("error").innerHTML = error;
	} else
	if (reg_password!=reg_repassword) {
		var error = "Xác nhận mật khẩu sai";
		document.getElementById("error").innerHTML = error;
	} else
	if (reg_username.match(specialFormat)) {
		var error = "Username không được chứa các kí tự đặc biệt";
		document.getElementById("error").innerHTML = error;
	} else {
		account.push(localUser);

		localUser = JSON.parse(localStorage.getItem('listAcc'));
		saveChangeAcc();
		
	}

	saveChangeAcc();
	loadAcc();
}

// DÙNG SESSION ĐỂ LƯU USERLOGIN
var loginArr = [];

function saveUserLogin() {
    sessionStorage.setItem('userLogin', JSON.stringify(loginArr));
}
	  

// Lấy dữ liệu trong mảng từ Sessin ra
function loadUserLogin() {
    loginArr = JSON.parse(sessionStorage.getItem('userLogin'));
}
if (sessionStorage.getItem("userLogin") != null) {
    loadUserLogin();
}

//Đăng xuất nè 

function logout() {
	loginArr = [];
	saveUserLogin();
}

// Chức năng đăng nhập vào phần quản lý của anh Admin
function login() {
	// dùng một chút session
	var username = String(document.getElementById("username").value);
	var password = String(document.getElementById("password").value);

	var userLogin = {
		username : document.getElementById("username").value,
		password : document.getElementById("password").value
	}

	for (let i = 0; i <= account.length - 1; i++) {
		if ((username === String(account[i].username) && password === String(account[i].password)) ||
			((username === String(account[i].reg_username) && password === String(account[i].reg_password)))) {
			if (account[i].role === "admin" && account[i].status === "kích hoạt") {
				window.location.href = 'admin.html';

				loginArr.push(userLogin);
				saveUserLogin();

				var error = "";
				document.getElementById("error").innerHTML = error;
				
				
				document.getElementById("adminAvatar").innerHTML = "<img src='img/admin.png'/>";
			} else if (account[i].role === "user") {
				// document.getElementById("user_message").innerHTML = "Chào, " + account[i].name + "! Chúng tôi đang xem xét và phê duyệt tài khoản của bạn trong việc tham gia <b>Bán Hàng Cùng Ant Green</b>. Việc xem xét tài khoản mất đến 24h - 72h. Vui lòng đăng nhập vào thời gian tới. Xin cảm ơn!";
				window.location.href = 'user.html';
				
				loginArr.push(userLogin);
				saveUserLogin();
				
				var error = "";
				document.getElementById("error").innerHTML = error;
			} else if (account[i].role === "seller") {
				// document.getElementById("user_message").innerHTML = "Chào, " + account[i].name + "! Chúng tôi đang xem xét và phê duyệt tài khoản của bạn trong việc tham gia <b>Bán Hàng Cùng Ant Green</b>. Việc xem xét tài khoản mất đến 24h - 72h. Vui lòng đăng nhập vào thời gian tới. Xin cảm ơn!";
				window.location.href = 'seller.html';
				
				loginArr.push(userLogin);
				saveUserLogin();


				var error = "";
				document.getElementById("error").innerHTML = error;
			} else {
				var error = "";
				document.getElementById("error").innerHTML = error;
			}

		} else if ((username !== String(account[i].username) && password !== String(account[i].password)) ||
			(username === String(account[i].username) && password !== String(account[i].password)) ||
			(username !== String(account[i].username) && password === String(account[i].password))) {
			var error = "Sai tài khoản hoặc mật khẩu";
			document.getElementById("error").innerHTML = error;
		} else if (account[i].status === "khóa") {
			var error = "Tài khoản của bạn đã bị khóa";
			document.getElementById("error").innerHTML = error;
		} else {
			var error = "";
			document.getElementById("error").innerHTML = error;
		}
	}

	// Kiểm tra dữ liệu nhập vào
	if (username=="" || password=="") {
		var error = "Vui lòng nhập username hoặc password";
		document.getElementById("error").innerHTML = error;
	} 
	if (username.length<5 || username.length>30) {
		var error = "Username phải có đồ dài từ 4-29 kí tự";
		document.getElementById("error").innerHTML = error;
	} 
	if (username.includes(" ")) {
		var error = "Username không bao gồm dấu cách";
		document.getElementById("error").innerHTML = error;
	}
	if(username.match(specialFormat)) {
		var error = "Username không được chứa các kí tự đặc biệt";
		document.getElementById("error").innerHTML = error;
	}
}

function displayUserFullName() {
	for (let i = 0; i <= account.length - 1; i++) { 
		if(account[i].username == loginArr[0].username) {
			document.getElementById("adminName2").innerHTML = account[i].name;
			document.getElementById("adminName3").innerHTML = account[i].name;
			
		}
	}
}
displayUserFullName();


// function getPageInfo() {
// 	for(let i = 0; i <= account.length - 1; i++){
// 		if(account[i].username == loginArr[0].username) { 
// 			document.getElementById("d_name").innerHTML = account[i].name;
// 			document.getElementById("d_username").innerHTML = account[i].username;
// 		}
// 	}
// }
// getPageInfo();