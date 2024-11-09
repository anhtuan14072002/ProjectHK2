// MODULE 1: QUẢN LÝ SẢN PHẨM (PRODUCT)

// Xuất các Sản Phẩm từ mảng (mảng đã đẩy vào local) ra HTML hiển thị trên trang quản lý Admin
var listLocalProductInAdmin = function () {
	var listproduct = "";
    for (var i in product) {
		var data = JSON.parse(JSON.stringify(product[i]));
			if (String(data.cateId)=="1") {
				data.cateId = "Tiêu Cảnh Để Bàn";
			} else if (String(data.cateId)=="2") {
				data.cateId = "Chậu Cảnh Để Bàn";
			} else if (String(data.cateId)=="3") {
				data.cateId = "Chậu Cảnh Mini";
			} else if (String(data.cateId)=="4") {
				data.cateId = "Phụ Kiện Trang Trí";
			} else if (String(data.cateId)=="5") {
				data.cateId = "Sen Đá";
			} else {
				data.cateId = "Khác";
			}

			var listproduct = '<tr/>';
        	listproduct += '<td>' + data.code + '</td>';
	        listproduct += '<td><img style="width: 50px" src="' + data.image +'" alt="san pham">';
	        listproduct += '<td>'+ data.name +'</td>';
	        listproduct += '<td>'+ data.price+ '₫</td>';
	        listproduct += '<td>' + data.origin + '</td>';
	        listproduct += '<td>'+data.cateId+'</td>';
	        listproduct += '<td>'+((String(data.isFeature)=="1")?'<span class="badge badge-success">Hiển Thị</span>':'<span class="badge badge-danger">Ẩn</span>')+'</td>';
	        listproduct += '<td style="width: 100px"><button onclick="deleteProduct('+ i +')" class="btn btn-danger mr-2 btn-sm shadow-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
	        + '<button data-toggle="modal" data-target="#exampleModal" onclick=updateProduct(' + i + ') class="btn btn-primary btn-sm shadow-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>';
	        listproduct += '</tr>';
	        document.getElementById("listProductInAdmin").innerHTML += listproduct;
       
    }
    saveChange();
}


// Xóa sản phẩm trên Admin
var deleteProduct = function (i) {
    product.splice(i, 1);
    localStorage.setItem("listProduct", JSON.stringify(product));
	window.location.reload();
}


// Chỉnh sửa sản phẩm
var updateProduct = function (i) {

    var dt = product[i];
    document.getElementById('inputId').value = dt.code;
	document.getElementById('inputImg').value = dt.image;
	document.getElementById('inputName').value = dt.name;
	document.getElementById('inputPrice').value = dt.price;
	document.getElementById('inputOrigin').value = dt.origin;
	document.getElementById('inputFea').value = dt.isFeature;
	document.getElementById('inputCate').value = dt.cateId;

    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedProduct('+i+')>Submit</button>';
    document.getElementById("modalTitleCreate").innerHTML = 'Chỉnh sửa sản phẩm';
    document.getElementById("inputId").setAttribute("disabled", "disabled");
}


// Hoàn tất chỉnh sửa
var submitUpdatedProduct = function (i) {
	product[i] = ({
    	code : document.getElementById('inputId').value,
		image : document.getElementById('inputImg').value,
	    name : document.getElementById('inputName').value,
	    price : document.getElementById('inputPrice').value,
	    origin: document.getElementById('inputOrigin').value,
	    isFeature : document.getElementById('inputFea').value,
	    cateId : document.getElementById('inputCate').value
	});
    
	localStorage.setItem("listProduct", JSON.stringify(product));
    document.getElementById('inputId').value = "";
	document.getElementById('inputImg').value = "";
	document.getElementById('inputName').value = "";
	document.getElementById('inputPrice').value = "";
	document.getElementById('inputOrigin').value = "";
	document.getElementById('inputFea').value = "";
	document.getElementById('inputCate').value = "";

    window.location.reload();
}

listLocalProductInAdmin();


// MODULE 2: QUẢN LÝ SLIDE (CMS SLIDE)
var listSlideinAdmin = function () {
	var cmsSlide = "";
    for (var i in slide) {
		var data = JSON.parse(JSON.stringify(slide[i]));


	        	var cmsSlide = '<tr>';
	        	cmsSlide += '<td><img style="width: 50px!important" src="'+ data.image +'" class="d-block w-100" alt="'+ data.title +'"></td>';
		        cmsSlide += '<td>'+ data.title +'</td>';
		        cmsSlide += '<td style="width: 40%;">' + data.description + '</td>';
		        cmsSlide += '<td>' + (data.isActive == 1?"<span class='badge badge-primary'>Hiển thị</span>":"<span class='badge badge-danger'>Ẩn</span>") + '</td>';
		        cmsSlide += '<td style="width: 100px"><button onclick="deleteSlide('+ i +')" class="btn btn-danger mr-2 btn-sm shadow-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
		        		+'<button data-toggle="modal" data-target="#modalSlide" onclick=updateSlide(' + i + ') class="btn btn-primary btn-sm shadow-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>';
		        cmsSlide += '<tr/>';
		        document.getElementById("cmsSlideInAdmin").innerHTML += cmsSlide;
        }
    saveSlide();
}

// Thêm mới slide
var addNewLocalSlide = function () {

    var localSlide = {
    	image : document.getElementById('sImage').value,
		title : document.getElementById('sTitle').value,
	    description : document.getElementById('sDescription').value,
	    link : document.getElementById('sLink').value,
	    status: document.getElementById('sStatus').value,
	    isActive : document.getElementById('sActive').value
	};

    
	slide.push(localSlide);

	localStorage.setItem('listSlide', JSON.stringify(slide));
	

 saveSlide();
	

window.location.reload();
}

// Xóa slide trên Admin
var deleteSlide = function (i) {
    slide.splice(i, 1);
    localStorage.setItem("listSlide", JSON.stringify(slide));
	window.location.reload();
}

// Chỉnh sửa slide
var updateSlide = function (i) {

    var dt = slide[i];

    document.getElementById('sImage').value = dt.image;
	document.getElementById('sTitle').value = dt.title;
	document.getElementById('sDescription').value = dt.description;
	document.getElementById('sLink').value = dt.link;
	document.getElementById('sStatus').value = dt.status;
	document.getElementById('sActive').value = dt.isActive;

    document.getElementById("submitButtonSlide").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedSlide('+i+')>Submit</button>';
    document.getElementById("modalTitleSlide").innerHTML = 'Chỉnh sửa slide';

}


// Hoàn tất chỉnh sửa
var submitUpdatedSlide = function (i) {
	slide[i] = ({

		image : document.getElementById('sImage').value,
		title : document.getElementById('sTitle').value,
	    description : document.getElementById('sDescription').value,
	    link : document.getElementById('sLink').value,
	    status: document.getElementById('sStatus').value,
	    isActive : document.getElementById('sActive').value

	});
    
	localStorage.setItem("listSlide", JSON.stringify(slide));
    document.getElementById('sImage').value = "";
	document.getElementById('sTitle').value = "";
	document.getElementById('sDescription').value = "";
	document.getElementById('sLink').value = "";
	document.getElementById('sStatus').value = "";
	document.getElementById('sActive').value = "";

    window.location.reload();
}
// Xóa menu trên Admin
var deleteMenuItem = function (i) {
    menu.splice(i, 1);
    localStorage.setItem("listMenu", JSON.stringify(menu));
	window.location.reload();
}


listSlideinAdmin();


// MODULE 3: QUẢN LÝ MENU (CMS MENU)
// Xuất các Menu từ mảng (mảng đã đẩy vào local) ra HTML
var listMenuInAdmin = function () {
	var cmsMenu = "";
    for (var i in menu) {
		var data = JSON.parse(JSON.stringify(menu[i]));

	        	var cmsMenu = '<tr>';
	        	cmsMenu += '<td>'+data.menuId+'</td>';
	        	cmsMenu += '<td>'+data.Name+'</td>';
	        	cmsMenu += '<td>'+data.Link+'</td>';
	        	cmsMenu += '<td>'+ data.Target+'</td>';
	        	cmsMenu += '<td>' + (data.isActive == 1?"<span class='badge badge-primary'>Hiển thị</span>":"<span class='badge badge-danger'>Ẩn</span>") + '</td>';
		        cmsMenu += '<td><button onclick="deleteMenuItem('+ i +')" class="btn btn-danger mr-2 btn-sm shadow-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
		        		+'<button data-toggle="modal" data-target="#modalMenu" onclick=updateMenu(' + i + ') class="btn btn-primary btn-sm shadow-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>';
		        cmsMenu += '</tr>';
		        document.getElementById("cmsMenuInAdmin").innerHTML += cmsMenu;
        }
    saveMenu();
}

// Thêm menu
var addNewLocalMenu = function () {

    var localMenu = {
		menuId : document.getElementById('menuId').value,
		Name : document.getElementById('menuName').value,
	    Link : document.getElementById('menuLink').value,
	    Target : document.getElementById('menuTarget').value,
	    Property: document.getElementById('menuProperty').value,
	    isActive : document.getElementById('menuStatus').value
	};

    
	menu.push(localMenu);

	localStorage.setItem('listMenu', JSON.stringify(menu));
	

 saveMenu();
	

window.location.reload();
}
// addNewLocalMenu();



// Chỉnh sửa menu
var updateMenu = function (i) {

    var dt = menu[i];

    document.getElementById('menuId').value = dt.menuId;
	document.getElementById('menuName').value = dt.Name;
	document.getElementById('menuLink').value = dt.Link;
	document.getElementById('menuTarget').value = dt.Target;
	document.getElementById('menuProperty').value = dt.Property;
	document.getElementById('menuStatus').value = dt.isActive;

    document.getElementById("submitButtonMenu").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedMenu('+i+')>Submit</button>';
    document.getElementById("modalTitleMenu").innerHTML = 'Chỉnh sửa menu';
    document.getElementById("menuId").setAttribute("disabled", "disabled");
}


// Hoàn tất chỉnh sửa
var submitUpdatedMenu = function (i) {
	menu[i] = ({
		menuId : document.getElementById('menuId').value,
		Name : document.getElementById('menuName').value,
	    Link : document.getElementById('menuLink').value,
	    Target : document.getElementById('menuTarget').value,
	    Property: document.getElementById('menuProperty').value,
	    isActive : document.getElementById('menuStatus').value
	});
    
	localStorage.setItem("listMenu", JSON.stringify(menu));
    document.getElementById('menuId').value = "";
	document.getElementById('menuName').value = "";
	document.getElementById('menuLink').value = "";
	document.getElementById('menuTarget').value = "";
	document.getElementById('menuProperty').value = "";
	document.getElementById('menuStatus').value = "";

    window.location.reload();
}
// Xóa menu trên Admin
var deleteMenuItem = function (i) {
    menu.splice(i, 1);
    localStorage.setItem("listMenu", JSON.stringify(menu));
	window.location.reload();
}

listMenuInAdmin();

// MODULE 4: QUẢN LÝ TÀI KHOẢN (ĐĂNG NHẬP ĐĂNG KÝ)
// Xuất các Users từ mảng (mảng đã đẩy vào local) ra HTML
var listLocalAccount = function () {
	var listacc = "";
    for (var i in account) {
		var data = JSON.parse(JSON.stringify(account[i]));

		listacc += "<tr>"
		+ "<td>"+ data.name +"</td>"
		+ "<td>"+ data.username +"</td>"
		+ "<td id='showhide_pass'>"+ data.password +"</td>"
		+ "<td>"+ data.role +"</td>"
		+ "<td>"+ (data.status==="kích hoạt"?"<span class='badge badge-primary'>Kích hoạt</span>":"<span class='badge badge-danger'>Khóa</span>") + '</td>'
		+ "<td><button data-toggle='modal' data-target='#addAcc' onclick=updateAccountInAdmin(" + i + ") class='btn btn-primary btn-sm shadow-sm'><i class='fa fa-pencil' aria-hidden='true'></i></button></td>"
		+ "</tr>";
		
    }
    document.getElementById("listUser").innerHTML += listacc;
    saveChangeAcc();
}
 // listLocalAccount();
var addNewLocalAccount = function () {

    var localAccount = {
		username : document.getElementById('e_username').value,
		name : document.getElementById('e_name').value,
	    password : document.getElementById('e_password').value,
	    role : document.getElementById('e_role').value,
	    status: document.getElementById('e_status').value,
	};

    
	account.push(localAccount);

	localStorage.setItem('listAcc', JSON.stringify(account));
	

 saveChangeAcc();
	

window.location.reload();
}
// listLocalAccount();

// Chỉnh sửa tài khoản (Admin): Phân quyền, Khóa, Kích hoạt tài khoản
var updateAccountInAdmin = function (i) {

    var dt = account[i];

    document.getElementById('e_username').value = dt.username;
	document.getElementById('e_name').value = dt.name;
	document.getElementById('e_password').value = dt.password;
	document.getElementById('e_role').value = dt.role;
	document.getElementById('e_status').value = dt.status;

    document.getElementById("submitButton2").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedAccountInAdmin('+i+')>Submit</button>'; 
    document.getElementById("modalTitleAcc").innerHTML = 'Phân quyền, Kích hoạt hoặc Khóa tài khoản';

    document.getElementById("e_username").setAttribute("disabled", "disabled");
    document.getElementById("e_name").setAttribute("disabled", "disabled");
    document.getElementById("e_password").setAttribute("disabled", "disabled");
    document.getElementById("e_repassword").setAttribute("disabled", "disabled");
}

var submitUpdatedAccountInAdmin = function (i) {
	account[i] = ({
		username : document.getElementById('e_username').value,
		name : document.getElementById('e_name').value,
	    password : document.getElementById('e_password').value,
	    role : document.getElementById('e_role').value,
	    status: document.getElementById('e_status').value
	});
    
	localStorage.setItem("listAcc", JSON.stringify(account));
    document.getElementById('e_username').value = "";
	document.getElementById('e_name').value = "";
	document.getElementById('e_password').value = "";
	document.getElementById('e_role').value = "";
	document.getElementById('e_status').value = "";


    window.location.reload();
}
listLocalAccount();

// MODULE 5: THỐNG KÊ SẢN PHẨM 
function countTieuCanhDeBanAdmin () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 1) {
			count1++;
		}
	}
	return count1;
}
$('#countTieuCanhDeBanAdmin').html(countTieuCanhDeBanAdmin());
countTieuCanhDeBanAdmin();

// Danh mục: Chậu cảnh để bàn
function countChauCanhDeBanAdmin () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 2) {
			count1++;
		}
	}
	return count1;
}
$('#countChauCanhDeBanAdmin').html(countChauCanhDeBanAdmin());
countChauCanhDeBanAdmin();

// Danh mục: Chậu cảnh mini
function countChauCanhMiniAdmin () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 3) {
			count1++;
		}
	}
	return count1;
}
$('#countChauCanhMiniAdmin').html(countChauCanhMiniAdmin());
countChauCanhMiniAdmin();


// Danh mục: phị kiện trang trí
function countPhuKienTrangTriAdmin () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 4) {
			count1++;
		}
	}
	return count1;
}
$('#countPhuKienTrangTriAdmin').html(countPhuKienTrangTriAdmin());
countPhuKienTrangTriAdmin();

// Danh mục: phị kiện trang trí
function countSenDaAdmin () {
	var count1 = 0;
	for (var i in product) {
		if (product[i].cateId == 5) {
			count1++;
		}
	}
	return count1;
}
$('#sendaAdmin').html(countSenDaAdmin());
countSenDaAdmin();

// Tổng số sản phẩm
function countProduct () {
	var count1 = 0;
	for (var i in product) {
		count1++;
	}
	return count1;
}
$('#allProductAdmin').html(countProduct());
countProduct();

// Tổng số bài viết
function countNews () {
	var count1 = 0;
	for (var i in posts) {
		count1++;
	}
	return count1;
}
$('#allNewsAdmin').html(countNews());
countNews();

// THỐNG KÊ TÀI KHOẢN
// Tổng số user
function countUser () {
	var count = 0;
	for (var i in account) {
		count++;
	}
	return count;
}
$('#allUserAdmin').html(countUser());
$('#allUserAdmin2').html(countUser());
countUser();

// Tổng số admin
function countAdminRole () {
	var count = 0;
	for (var i in account) {
		if(account[i].role === "admin") {
			count++;
		}
	}
	return count;
}
$('#adminRoleInAdmin').html(countAdminRole());
countAdminRole();

// Tổng số seller
function countSellerRole () {
	var count = 0;
	for (var i in account) {
		if(account[i].role === "seller") {
			count++;
		}
	}
	return count;
}
$('#adminSellerInAdmin').html(countSellerRole());
countSellerRole();
// MODULE 6: QUẢN LÝ MÃ GIẢM GIÁ 
var listCouponinAdmin = function () {
	var listCoupon = "";
    for (var i in coupon) {
		var data = JSON.parse(JSON.stringify(coupon[i]));


	        	var listCoupon = '<tr>';
	        	listCoupon += '<td>'+ data.code +'</td>';
		        listCoupon += '<td>'+ data.detail +'</td>';
		        listCoupon += '<td>'+ data.value +' ₫</td>';
		        listCoupon += '<td>' + (data.isActive == 1?"<span class='badge badge-primary'>Hiển thị</span>":"<span class='badge badge-danger'>Ẩn</span>") + '</td>';
		        listCoupon += '<td style="width: 100px;"><button onclick="deleteCoupon('+ i +')" class="btn btn-danger mr-2 btn-sm shadow-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
		        		+'<button data-toggle="modal" data-target="#modalCoupon" onclick=updateCouponInAdmin(' + i + ') class="btn btn-primary btn-sm shadow-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>';
		        listCoupon += '<tr/>';
		        document.getElementById("listCouponInAdmin").innerHTML += listCoupon;
        }
    saveCoupon();
}

// Thêm mới mã
var addNewLocalCoupon = function () {

    var localCoupon = {
		code : document.getElementById('couponCode').value,
		detail : document.getElementById('couponDetail').value,
	    value : document.getElementById('couponValue').value,
	    dateBegin : document.getElementById('couponBegin').value,
	    dateEnd: document.getElementById('couponEnd').value,
	    isActive : document.getElementById('couponStatus').value
	};

    
	coupon.push(localCoupon);

	localStorage.setItem('listCoupon', JSON.stringify(coupon));
	

 saveCoupon();
	

window.location.reload();
}

// Xóa mã
var deleteCoupon = function (i) {
    coupon.splice(i, 1);
    localStorage.setItem("listCoupon", JSON.stringify(coupon));
	window.location.reload();
}

// Chỉnh sửa mã
var updateCouponInAdmin = function (i) {

    var dt = coupon[i];

    document.getElementById('couponCode').value = dt.code;
	document.getElementById('couponDetail').value = dt.detail;
	document.getElementById('couponValue').value = dt.value;
	document.getElementById('couponBegin').value = dt.dateBegin;
	document.getElementById('couponEnd').value = dt.dateEnd;
	document.getElementById('couponStatus').value = dt.isActive;

    document.getElementById("submitButtonCoupon").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedCouponInAdmin('+i+')>Submit</button>'; 
    document.getElementById("modalTitleCoupon").innerHTML = 'Chỉnh sửa mã giảm giá';

}

var submitUpdatedCouponInAdmin = function (i) {
	coupon[i] = ({
		code : document.getElementById('couponCode').value,
		detail : document.getElementById('couponDetail').value,
	    value : document.getElementById('couponValue').value,
	    dateBegin : document.getElementById('couponBegin').value,
	    dateEnd: document.getElementById('couponEnd').value,
	    isActive : document.getElementById('couponStatus').value
	});
    
	localStorage.setItem("listCoupon", JSON.stringify(coupon));
    document.getElementById('couponCode').value = "";
	document.getElementById('couponDetail').value = "";
	document.getElementById('couponValue').value = "";
	document.getElementById('couponBegin').value = "";
	document.getElementById('couponEnd').value = "";
	document.getElementById('couponStatus').value = "";


    window.location.reload();
}

// function autoCancelCoupon() {
// 	var cb = document.getElementById("couponBegin").value;
// 	var ce = document.getElementById("couponEnd").value;

// 	for (var i = 0; i<coupon.length; i++) {
// 		if(ce-cb==0) {
// 			var dt = coupon[i];
// 			coupon[i] = ({
// 				code : dt.code,
// 				detail : dt.detail,
// 			    value : dt.value,
// 			    dateBegin : "",
// 			    dateEnd: "",
// 			    isActive : 0
// 			});
// 		}
// 	}
	

// 	localStorage.setItem('listCoupon', JSON.stringify(coupon));
//  	saveCoupon();
// }
// Tự động hủy mã nếu hết hạn

// autoCancelCoupon();




listCouponinAdmin();
// MODULE 7: CHỨC NĂNG LỌC SẢN PHẨM

// MODULE 8: QUẢN LÝ GIỎ HÀNG

// MODULE 9: QUẢN LÝ THANH TOÁN

// MODULE 10: CODE CHÍNH GIAO DIỆN

// MODULE 11: QUẢN LÝ TIN TỨC
// Xuất các bài viết từ mảng (mảng đã đẩy vào local) ra HTML trên admin
var listPostsInAdmin = function () {
	var listPost = "";
    for (var i in posts) {
		var data = JSON.parse(JSON.stringify(posts[i]));

	        	var listPost = '<tr>';
	        	listPost += '<td>'+data.Id+'</td>';
	        	listPost += '<td>'+data.title+'</td>';
	        	listPost += '<td><img src="'+data.image+'" style="width: 150px"/></td>';
	        	listPost += '<td>'+ data.description+'</td>';
	        	listPost += '<td>'+ data.slug+'</td>';
	        	listPost += '<td>'+ data.content+'</td>';
	        	listPost += '<td>'+ data.tag+'</td>';
	        	listPost += '<td>'+ data.createdby+'</td>';
	        	listPost += '<td>' + (data.isPublished == 1?"<span class='badge badge-primary'>Xuất bản</span>":"<span class='badge badge-danger'>Bản thảo</span>") + '</td>';
		        listPost += '<td style="width: 100px"><button onclick="deletePostItem('+ i +')" class="btn btn-danger mr-2 btn-sm shadow-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
		        		+'<button data-toggle="modal" data-target="#modalPost" onclick=updatePost(' + i + ') class="btn btn-primary btn-sm shadow-sm"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>';
		        listPost += '</tr>';
		        document.getElementById("listPostInAdmin").innerHTML += listPost;

        }
    savePosts();
}

// Thêm bài viết mới
var addNewLocalPost = function () {

    var localPost = {
		Id: document.getElementById("postId").value,
		title: document.getElementById("postTitle").value,
		image: document.getElementById("postImage").value,
		description: document.getElementById("postMeta").value,
		slug: document.getElementById("postSlug").value,
		content: document.getElementById("postContent").value,
		tag: document.getElementById("postTags").value,
		createdby: document.getElementById("postAuthor").value,
		isPublished: document.getElementById("postStatus").value
	};

    
	posts.push(localPost);

	localStorage.setItem('listPosts', JSON.stringify(posts));
	

 savePosts();
	

window.location.reload();
}
// addNewLocalMenu();



// Chỉnh sửa bài viết
var updatePost = function (i) {

    var p = posts[i];
    document.getElementById("postId").value = p.Id;
	document.getElementById("postTitle").value = p.title;
	document.getElementById("postImage").value = p.image;
	document.getElementById("postMeta").value = p.description;
	document.getElementById("postSlug").value = p.slug;
	document.getElementById("postContent").value = p.content;
	document.getElementById("postTags").value = p.tag;
	document.getElementById("postAuthor").value = p.createdby;
	document.getElementById("postStatus").value = p.isPublished;


    document.getElementById("submitPosts").innerHTML = '<button id="updateButton" data-dismiss="modal" aria-lable="Close" class="btn btn-warning" onclick=submitUpdatedPost('+i+')>Submit</button>';
    document.getElementById("modalTitleMenu").innerHTML = 'Chỉnh sửa bài viết';
    document.getElementById("postId").setAttribute("disabled", "disabled");
}


// Hoàn tất chỉnh sửa
var submitUpdatedPost = function (i) {
	posts[i] = ({
		Id: document.getElementById("postId").value,
		title: document.getElementById("postTitle").value,
		image: document.getElementById("postImage").value,
		description: document.getElementById("postMeta").value,
		slug: document.getElementById("postSlug").value,
		content: document.getElementById("postContent").value,
		tag: document.getElementById("postTags").value,
		createdby: document.getElementById("postAuthor").value,
		isPublished: document.getElementById("postStatus").value
	});
    
	localStorage.setItem("listPosts", JSON.stringify(posts));
    document.getElementById("postId").value = "";
	document.getElementById("postTitle").value ="";
	document.getElementById("postImage").value = "";
	document.getElementById("postMeta").value ="";
	document.getElementById("postSlug").value = "";
	document.getElementById("postContent").value = "";
	document.getElementById("postTags").value = "";
	document.getElementById("postAuthor").value = "";
	document.getElementById("postStatus").value = "";

    window.location.reload();
}
// Xóa bài viết 
var deletePostItem = function (i) {
    posts.splice(i, 1);
    localStorage.setItem("listPosts", JSON.stringify(posts));
	window.location.reload();
}

listPostsInAdmin();