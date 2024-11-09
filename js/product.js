// Tạo mảng lưu các thông tin sản phẩm
var product = [
{
	code: 'SP0001',
	image: 'img/sd1.jpg',
	name: 'Sen Đá Thạch Bích',
	price: 73000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 5
}, 
{
	code: 'SP0002',
	image: 'img/sd2.jpg',
	name: 'Sen Đá Mỏ Vịt',
	price: 160000,
	origin: "Nhật Bản",
	isFeature: 1,
	cateId: 5
}, 
{
	code: 'SP0003',
	image: 'img/cay3.jpg',
	name: 'Cây Vạn Niên Thanh',
	price: 321000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 2
}, 
{
	code: 'SP0004',
	image: 'img/cay4.jpg',
	name: 'Cây Búp Đa Đỏ',
	price: 470000,
	origin: "Nhật Bản",
	isFeature: 1,
	cateId: 4
}, 
{
	code: 'SP0005',
	image: 'img/cay5.jpg',
	name: 'Cây Hoa Hồng Môn',
	price: 620000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 4
}, 
{
	code: 'SP0006',
	image: 'img/cay6.jpg',
	name: 'Cây Cọ Nhật',
	price: 720000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 1
}, 
{
	code: 'SP0007',
	image: 'img/cay7.jpg',
	name: 'Cây Thiết Mộc Lan',
	price: 440000,
	origin: "Nhật Bản",
	isFeature: 1,
	cateId: 1
}, 
{
	code: 'SP0008',
	image: 'img/cay8.jpg',
	name: 'Cây Cung Điện Vàng',
	price: 640000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 2
}, 
{
	code: 'SP0009',
	image: 'img/cay9.jpg',
	name: 'Cây Vạn Niên Thanh',
	price: 270000,
	origin: "Việt Nam",
	isFeature: 1,
	cateId: 3
}, 
{
	code: 'SP00010',
	image: 'img/cay10.jpg',
	name: 'Cây Lan Ý trong nước',
	price: 230000,
	origin: "Nhật Bản",
	isFeature: 1,
	cateId: 2
}, 
{
	code: 'SP00011',
	image: 'img/cay11.jpg',
	name: 'Cây Tróc bạc trong nước',
	price: 160000,
	origin: "Việt Nam",
	isFeature: 0,
	cateId: 3
}];

// Đẩy tất cả sản phẩm vào localStorage
function saveChange() {
    localStorage.setItem('listProduct', JSON.stringify(product));
}

// Lấy dữ liệu Sản Phẩm trong mảng từ local ra
function loadProduct() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
if (localStorage.getItem("listProduct") != null) {
    loadProduct();
}


// Xuất các Sản Phẩm từ mảng (mảng đã đẩy vào local) ra HTML
var listLocalProduct = function () {
	var listproduct = "";
    for (var i in product) {
		var data = JSON.parse(JSON.stringify(product[i]));

	if (data.isFeature == 1) {
        	var listproduct = '<div class="product-inner" data-code="' + data.code + '">';
	        listproduct += '<div class="product-image">';
	        listproduct += '<a href="#">';
	        listproduct += '<img src="' + data.image +'" alt="'+ data.name +'">';
	        listproduct += '</a>';
	        listproduct += '</div>';
	        listproduct += '<a class="icon-addcart add-to-cart" data-cate="'+data.cateId+'"  data-image="'+ data.image +'" data-code="' + data.code + '" data-name="'+ data.name +'" data-origin="'+ data.origin +'" data-price="' + data.price +'">';
	        listproduct += '<i class="fa fa-cart-arrow-down"></i>';
	        listproduct += '<p class="eve-addcart">Thêm vào giỏ hàng</p>';
	        listproduct += '</a>';
	        listproduct += '<div class="product-detail">';
	        listproduct += '<h3>';
	        listproduct += '<a href="#">'+ data.name +'</a>';
	        listproduct += '</h3>';
	        listproduct += '<p>'+ data.price+ '₫</p>';
	        listproduct += '</div>';
	        listproduct += '</div>';
	        document.getElementById("listproduct").innerHTML += listproduct;
        }
    }
    saveChange();
}





// Chức năng thêm Sản Phẩm mới
var addNewLocalProduct = function () {
var inputCode = document.getElementById('inputId').value;

    var localProduct = {
		code : document.getElementById('inputId').value,
		image : document.getElementById('inputImg').value,
	    name : document.getElementById('inputName').value,
	    price : document.getElementById('inputPrice').value,
	    origin: document.getElementById('inputOrigin').value,
	    isFeature : document.getElementById('inputFea').value,
	    cateId : document.getElementById('inputCate').value
	};

	// Kiểm tra ID có trùng không mới cho phép thêm

	product.push(localProduct);

	localStorage.setItem('listProduct', JSON.stringify(product));
	saveChange();

	window.location.reload();

	
}	    
listLocalProduct();




// - - - - - - - - - - - - - - - - - - - - - - - -
 // 	Đếm các sản phẩm trong từng danh mục
 // - - - - - - - - - - - - - - - - - - - - - - - -

// Danh mục: Tiêu cảnh để bàn
function countTieuCanhDeBan () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 1) {
			count1++;
		}
	}
	return count1;
}
$('#countTieuCanhDeBan').html(countTieuCanhDeBan());
countTieuCanhDeBan();

// Danh mục: Chậu cảnh để bàn
function countChauCanhDeBan () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 2) {
			count1++;
		}
	}
	return count1;
}
$('#countChauCanhDeBan').html(countChauCanhDeBan());
countChauCanhDeBan();

// Danh mục: Chậu cảnh mini
function countChauCanhMini () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 3) {
			count1++;
		}
	}
	return count1;
}
$('#countChauCanhMini').html(countChauCanhMini());
countChauCanhMini();


// Danh mục: phị kiện trang trí
function countPhuKienTrangTri () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 4) {
			count1++;
		}
	}
	return count1;
}
$('#countPhuKienTrangTri').html(countPhuKienTrangTri());
countPhuKienTrangTri();

// Danh mục: phị kiện trang trí
function countSenDa () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 5) {
			count1++;
		}
	}
	return count1;
}
$('#senda').html(countSenDa());
countSenDa();

 // -- end ----> Đếm các sản phẩm trong từng danh mục - - - - - - - - - - - - - - - - - - - - - - - -